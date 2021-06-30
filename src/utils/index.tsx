import { useState, useEffect } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useArray = <T,>(initArray: T[]) => {
  const [value, setValue] = useState(initArray);
  return {
    value,
    setValue,
    add: (item: T) => {
      setValue([...value, item]);
    },
    clear() {
      setValue([]);
    },
    removeIndex(index: number) {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
