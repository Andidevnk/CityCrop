import React from 'react';

import UsedGridSlot from './UsedGridSlot';
import EmptyGridSlot from './EmptyGridSlot';

const GridSlot = ({ style, plant, onUsedSlotPress, onEmptySlotPress }) =>
  plant ? (
    <UsedGridSlot style={style} plant={plant} onPress={onUsedSlotPress} />
  ) : (
    <EmptyGridSlot style={style} onPress={onEmptySlotPress} />
  );

export default GridSlot;
