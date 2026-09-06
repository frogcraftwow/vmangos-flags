import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { inventoryTypes, itemClasses, itemSubclassesByClass } from '../data/equippedItems';

export default function EquippedItemRequirementsPage() {
  const [itemClass, setItemClass] = useState(2);
  const subclasses = useMemo(() => itemSubclassesByClass[itemClass] ?? [], [itemClass]);
  const selectedClass = itemClasses.find((row) => row.value === itemClass);

  return <>
    <PageHeader title="Equipped Item Requirements" />
    <section className="panel equipment-field-strip">
      <span><code>SubClassMask = 0</code> any subclass</span>
      <span><code>InventoryTypeMask = 0</code> any inventory type</span>
    </section>

    <section className="panel equipment-class-picker">
      <label>Item class for subclass mask
        <select value={itemClass} onChange={(e) => setItemClass(Number(e.target.value))}>
          {itemClasses.map((row) => <option key={row.value} value={row.value}>{row.value} — {row.name}</option>)}
        </select>
      </label>
      <strong className="mono">{selectedClass?.name}</strong>
    </section>

    <div className="equipment-mask-grid">
      {subclasses.length ? <MaskTool
        title="EquippedItemSubClassMask"
        flags={subclasses}
        presetScope={`spells:equipped-subclass:${itemClass}`}
        definitionScope={`spells:item-subclass:${itemClass}`}
        maxBits={32}
        bitLabel="SubClass"
      /> : <section className="panel empty-mask-state"><strong>No 1.12 subclasses defined for this class.</strong></section>}

      <MaskTool
        title="EquippedItemInventoryTypeMask"
        flags={inventoryTypes}
        presetScope="spells:equipped-inventory-type"
        definitionScope="spells:inventory-type"
        maxBits={32}
        bitLabel="InventoryType"
      />
    </div>
  </>;
}
