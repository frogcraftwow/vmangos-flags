import { describe, expect, it } from 'vitest';
import { emptyProfile, exportProfile, fromExport, validateProfileImport } from './profiles';

describe('profile format', () => {
  it('exports only user-owned profile data', () => {
    const p = emptyProfile('Test');
    const data = exportProfile(p);
    expect(data.format).toBe('spell-dev-toolkit-profile');
    expect(data.overrides.spellFamilyFlags).toEqual({});
    expect(data.overrides.maskDefinitions).toEqual({});
    expect('baseline' in data).toBe(false);
  });

  it('rejects profiles from older/incomplete schemas instead of translating them', () => {
    const p = emptyProfile('Old');
    const data = exportProfile(p) as any;
    delete data.overrides.maskDefinitions;
    expect(() => validateProfileImport(data)).toThrow('Invalid mask-definition override map.');
  });

  it('rejects executable/invalid shapes rather than evaluating them', () => {
    expect(() => validateProfileImport({ format: 'x' })).toThrow();
  });
});
