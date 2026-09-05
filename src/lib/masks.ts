export function parseMask(input: string): bigint {
  const value = input.trim().replaceAll('_', '');
  if (!value) return 0n;
  if (/^[+-]?0x[0-9a-f]+$/i.test(value)) return BigInt(value);
  if (/^[+-]?\d+$/.test(value)) return BigInt(value);
  throw new Error('Enter a decimal integer or hexadecimal value such as 0x80000000.');
}

export function maskForBit(bitIndex: number): bigint {
  if (!Number.isInteger(bitIndex) || bitIndex < 0) throw new Error('Invalid bit index');
  return 1n << BigInt(bitIndex);
}

export function hasBit(mask: bigint, bitIndex: number): boolean {
  return (mask & maskForBit(bitIndex)) !== 0n;
}

export function setBit(mask: bigint, bitIndex: number, enabled: boolean): bigint {
  const flag = maskForBit(bitIndex);
  return enabled ? mask | flag : mask & ~flag;
}

export function toHex(mask: bigint, minDigits = 8): string {
  const prefix = mask < 0n ? '-0x' : '0x';
  const abs = mask < 0n ? -mask : mask;
  return prefix + abs.toString(16).toUpperCase().padStart(minDigits, '0');
}


export function activeBits(mask: bigint, maxBits = 64): number[] {
  const bits: number[] = [];
  for (let i = 0; i < maxBits; i += 1) if (hasBit(mask, i)) bits.push(i);
  return bits;
}
