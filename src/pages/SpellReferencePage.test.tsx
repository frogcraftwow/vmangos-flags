// @vitest-environment jsdom
import { StrictMode, act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ProfileProvider } from '../context/ProfileContext';
import { spellDbcReferenceGroups } from '../data/spellDbcReferences';
import { toHex } from '../lib/masks';
import SpellReferencePage from './SpellReferencePage';

const groups = Object.entries(spellDbcReferenceGroups);
let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  localStorage.clear();
  container = document.createElement('div');
  document.body.append(container);
  root = createRoot(container);
});

afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
});

async function open(group: string) {
  await act(async () => root.render(
    <StrictMode>
      <ProfileProvider>
        <MemoryRouter initialEntries={[`/spells/reference/${group}`]}>
          <nav>
            {groups.map(([key]) => <Link key={key} to={`/spells/reference/${key}`}>{key}</Link>)}
            <Link to="/spells/reference/spell-school">school</Link>
          </nav>
          <Routes>
            <Route path="/spells/reference/:group" element={<SpellReferencePage />} />
          </Routes>
        </MemoryRouter>
      </ProfileProvider>
    </StrictMode>,
  ));
}

async function navigate(group: string) {
  const link = container.querySelector<HTMLAnchorElement>(`a[href="/spells/reference/${group}"]`)!;
  await act(async () => {
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 }));
  });
}

async function select(id: number) {
  const dropdown = container.querySelector('select')!;
  await act(async () => {
    dropdown.value = String(id);
    dropdown.dispatchEvent(new Event('change', { bubbles: true }));
  });
  expect(container.querySelector('output[aria-label="Decimal ID"]')?.textContent).toBe(String(id));
  expect(container.querySelector('output[aria-label="Hex ID"]')?.textContent).toBe(toHex(BigInt(id)));
}

describe('DBC reference pages', () => {
  it.each(groups)('%s has one dropdown and displays the selected ID without a table', async (group, config) => {
    await open(group);
    expect(container.querySelectorAll('select')).toHaveLength(1);
    expect(container.querySelectorAll('table')).toHaveLength(0);
    expect(container.querySelectorAll('option')).toHaveLength(config.rows.length);
    await select(config.rows[0].value);
    await select(config.rows.at(-1)!.value);
  });

  it('keeps one working dropdown when repeatedly leaving and returning to durationIndex', async () => {
    await open('spell-duration');
    for (let visit = 0; visit < 4; visit++) {
      await navigate('spell-range');
      await navigate('spell-duration');
      expect(container.querySelectorAll('select')).toHaveLength(1);
      expect(container.querySelectorAll('table')).toHaveLength(0);
      await select(21);
      await select(1);
    }
    await navigate('spell-school');
    expect(container.querySelectorAll('select')).toHaveLength(0);
    expect(container.querySelectorAll('table')).toHaveLength(1);
    await navigate('spell-duration');
    expect(container.querySelectorAll('select')).toHaveLength(1);
    expect(container.querySelectorAll('table')).toHaveLength(0);
    await select(21);
  });
});
