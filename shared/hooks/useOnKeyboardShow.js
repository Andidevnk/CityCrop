import { useCallback, useEffect } from 'react';
import { Keyboard } from 'react-native';

const useOnKeyboardShowHide = (onKeyboardShow, onKeyboardHide = () => {}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyboardShowMemo = useCallback(onKeyboardShow, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyboardHideMemo = useCallback(onKeyboardHide, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardShowMemo);
    Keyboard.addListener('keyboardDidHide', onKeyboardHideMemo);

    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardShowMemo);
      Keyboard.removeListener('keyboardDidHide', onKeyboardHideMemo);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnKeyboardShowHide;
