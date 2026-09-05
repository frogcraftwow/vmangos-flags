import { describe, expect, it } from 'vitest';
import { activeBits, parseMask, toHex } from './masks';

describe('BigInt mask utilities', () => {
  it('parses decimal and hex beyond 32 bits', () => {
    expect(parseMask('4294967296')).toBe(1n << 32n);
    expect(parseMask('0x100000000')).toBe(1n << 32n);
  });

  it('handles the client-supported 51st family flag as one continuous mask', () => {
    const bit50 = 1n << 50n;
    expect(bit50).toBe(1125899906842624n);
    expect(toHex(bit50, 16)).toBe('0x0004000000000000');
  });

  it('decodes active bits', () => {
    expect(activeBits(0x800000001n, 40)).toEqual([0, 35]);
  });
});
