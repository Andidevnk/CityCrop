import { useState, useCallback } from 'react';

const useBooleanState = (initialState) => {
  const [value, setValue] = useState(initialState);

  const setValueTrue = useCallback(() => setValue(true), []);
  const setValueFalse = useCallback(() => setValue(false), []);
  const toggleValue = useCallback(() => setValue((prev) => !prev), []);

  return [value, setValueTrue, setValueFalse, toggleValue];
};

export default useBooleanState;
