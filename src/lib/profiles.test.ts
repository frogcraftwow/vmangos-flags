import { describe, expect, it } from 'vitest';
import { emptyProfile, exportProfile, validateProfileImport } from './profiles';

describe('profile format', () => {
  it('exports only user-owned profile data', () => {
    const p = emptyProfile('Test');
    const data = exportProfile(p);
    expect(data.format).toBe('spell-dev-toolkit-profile');
    expect(data.overrides.spellFamilyFlags).toEqual({});
    expect('baseline' in data).toBe(false);
  });
  it('rejects executable/invalid shapes rather than evaluating them', () => {
    expect(() => validateProfileImport({ format: 'x' })).toThrow();
  });
});
