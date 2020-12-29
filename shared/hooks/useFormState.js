import { useState, useCallback } from 'react';

function useFormState(initialState) {
  const [formState, setFormState_] = useState(initialState);

  const setFormState = useCallback(
    (value) => {
      setFormState_((prevState) => ({
        ...prevState,
        ...value,
      }));
    },
    [setFormState_]
  );

  return [formState, setFormState];
}

export default useFormState;
