import source from './spellDbcReferences.json';

export const spellDbcReferenceGroups = {
  'spell-cast-times': {
    ...source['spell-cast-times'],
    title: 'castingTimeIndex',
    fields: ['castingTimeIndex'],
    source: 'SpellCastTimes.dbc',
    selectorLabel: 'Cast time',
  },
  'spell-category': {
    // Friendly option names follow SpellCategories in vmangos/core's SpellDefines.h.
    ...source['spell-category'],
    title: 'category',
    fields: ['category'],
    source: 'SpellCategory.dbc',
    selectorLabel: 'Category',
  },
  'spell-duration': {
    ...source['spell-duration'],
    title: 'durationIndex',
    fields: ['durationIndex'],
    source: 'SpellDuration.dbc',
    selectorLabel: 'Duration',
  },
  'spell-radius': {
    ...source['spell-radius'],
    title: 'effectRadiusIndex1 / 2 / 3',
    fields: ['effectRadiusIndex1', 'effectRadiusIndex2', 'effectRadiusIndex3'],
    source: 'SpellRadius.dbc',
    selectorLabel: 'Effect radius',
  },
  'spell-range': {
    ...source['spell-range'],
    title: 'rangeIndex',
    fields: ['rangeIndex'],
    source: 'SpellRange.dbc',
    selectorLabel: 'Range',
  },
} as const;
