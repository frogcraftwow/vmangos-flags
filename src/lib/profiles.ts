export const PROFILE_FORMAT = 'spell-dev-toolkit-profile' as const;
export const ALL_PROFILES_FORMAT = 'spell-dev-toolkit-profiles' as const;
export const SCHEMA_VERSION = 1 as const;

export type FamilyOverride = { customAbility?: string; comment?: string };
export type DefinitionOverride = { name?: string; comment?: string };
export type MaskPreset = { id: string; name: string; mask: string; createdAt: string };
export type Profile = {
  id: string;
  name: string;
  author?: string;
  description?: string;
  overrides: {
    spellFamilyFlags: Record<string, FamilyOverride>;
    maskDefinitions: Record<string, DefinitionOverride>;
  };
  presets: Record<string, MaskPreset[]>;
  createdAt: string;
  modifiedAt: string;
};
export type ProfileExport = {
  format: typeof PROFILE_FORMAT;
  schemaVersion: typeof SCHEMA_VERSION;
  profile: Pick<Profile, 'id' | 'name' | 'author' | 'description' | 'createdAt' | 'modifiedAt'>;
  overrides: Profile['overrides'];
  presets: Profile['presets'];
};

export function uuid(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
export function emptyProfile(name = 'Default'): Profile {
  const now = new Date().toISOString();
  return { id: uuid(), name, overrides: { spellFamilyFlags: {}, maskDefinitions: {} }, presets: {}, createdAt: now, modifiedAt: now };
}
export function exportProfile(profile: Profile): ProfileExport {
  const { id, name, author, description, createdAt, modifiedAt } = profile;
  return { format: PROFILE_FORMAT, schemaVersion: SCHEMA_VERSION, profile: { id, name, author, description, createdAt, modifiedAt }, overrides: profile.overrides, presets: profile.presets };
}
function isRecord(value: unknown): value is Record<string, unknown> { return !!value && typeof value === 'object' && !Array.isArray(value); }
export function validateProfileImport(value: unknown): ProfileExport {
  if (!isRecord(value) || value.format !== PROFILE_FORMAT || value.schemaVersion !== SCHEMA_VERSION) throw new Error('Unsupported profile format or schema version.');
  if (!isRecord(value.profile) || typeof value.profile.id !== 'string' || typeof value.profile.name !== 'string') throw new Error('Profile metadata is missing an id or name.');
  if (!isRecord(value.overrides) || !isRecord(value.overrides.spellFamilyFlags)) throw new Error('Invalid spell-family override map.');
  if (!isRecord(value.overrides.maskDefinitions)) throw new Error('Invalid mask-definition override map.');
  if (!isRecord(value.presets)) throw new Error('Invalid presets map.');
  for (const [key, raw] of Object.entries(value.overrides.spellFamilyFlags)) {
    if (!/^\d+:\d+$/.test(key) || !isRecord(raw)) throw new Error(`Invalid override entry: ${key}`);
    if (raw.customAbility !== undefined && typeof raw.customAbility !== 'string') throw new Error(`Invalid customAbility at ${key}`);
    if (raw.comment !== undefined && typeof raw.comment !== 'string') throw new Error(`Invalid comment at ${key}`);
  }
  for (const [key, raw] of Object.entries(value.overrides.maskDefinitions)) {
    if (!key.includes(':') || !isRecord(raw)) throw new Error(`Invalid mask definition override: ${key}`);
    if (raw.name !== undefined && typeof raw.name !== 'string') throw new Error(`Invalid name at ${key}`);
    if (raw.comment !== undefined && typeof raw.comment !== 'string') throw new Error(`Invalid comment at ${key}`);
  }
  return value as unknown as ProfileExport;
}
export function fromExport(data: ProfileExport, copy = false): Profile {
  const now = new Date().toISOString();
  return {
    ...data.profile,
    id: copy ? uuid() : data.profile.id,
    name: copy ? `${data.profile.name} (copy)` : data.profile.name,
    overrides: JSON.parse(JSON.stringify(data.overrides)),
    presets: JSON.parse(JSON.stringify(data.presets)),
    modifiedAt: now,
  } as Profile;
}
export function slugify(value: string): string { return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'profile'; }
export function downloadJson(filename: string, value: unknown) {
  const blob = new Blob([JSON.stringify(value, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
}
