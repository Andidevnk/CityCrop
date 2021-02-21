import { useState, useCallback } from 'react';

const useArrayToggleState = (initialState) => {
  const [items, setItems] = useState(initialState);

  const toggleItem = useCallback(
    (item) => {
      setItems((prevItems) => {
        if (prevItems.includes(item)) {
          return prevItems.filter((prevItem) => prevItem !== item);
        } else {
          return [...prevItems, item];
        }
      });
    },
    [setItems]
  );

  return [items, toggleItem];
};

export default useArrayToggleState;
