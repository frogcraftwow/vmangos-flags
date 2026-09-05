import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { weapons } from '../data/weapons';

export default function WeaponsPage() {
  return <>
    <PageHeader title="Weapons" />
    <MaskTool
      title="Weapon SubClass Mask"
      flags={weapons.map((row) => ({
        name: row.weaponType,
        bitIndex: row.subClass,
        decimal: row.bitmask,
        hex: row.hex,
      }))}
      presetScope="weapons"
      maxBits={21}
      bitLabel="VMangos SubClass"
      nameLabel="Weapon Type"
    />
  </>;
}
