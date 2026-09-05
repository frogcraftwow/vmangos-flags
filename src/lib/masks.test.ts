import { describe, expect, it } from 'vitest';
import { activeBits, parseMask, splitCm, toHex } from './masks';

describe('BigInt mask utilities', () => {
  it('parses decimal and hex beyond 32 bits', () => {
    expect(parseMask('4294967296')).toBe(1n << 32n);
    expect(parseMask('0x100000000')).toBe(1n << 32n);
  });
  it('splits CM0 and CM1 correctly', () => {
    const { cm0, cm1 } = splitCm((1n << 32n) | 5n);
    expect(toHex(cm0)).toBe('0x00000005');
    expect(toHex(cm1)).toBe('0x00000001');
  });
  it('decodes active bits', () => expect(activeBits(0x800000001n, 40)).toEqual([0, 35]));
});
