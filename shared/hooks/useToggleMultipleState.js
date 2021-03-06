import { useState, useCallback } from 'react';

const useToggleMultipleState = (
  initialState,
  itemsMatch = (a, b) => a === b
) => {
  const [items, setItems] = useState(initialState);

  // Memoize function once since it shouldn't change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedItemsMatch = useCallback(itemsMatch, []);

  const toggleItem = useCallback(
    (item) => {
      setItems((prevItems) => {
        // TODO: Make this a separate function with a descriptive name
        // If item exists in array and remove it, otherwise add it
        return prevItems.some((prevItem) => memoizedItemsMatch(prevItem, item))
          ? prevItems.filter((prevItem) => !memoizedItemsMatch(prevItem, item))
          : [...prevItems, item];
      });
    },
    [memoizedItemsMatch, setItems]
  );

  const isItemSelected = useCallback(
    (item) => items.some((item_) => memoizedItemsMatch(item_, item)),
    [items, memoizedItemsMatch]
  );

  return [items, toggleItem, isItemSelected];
};

export default useToggleMultipleState;
