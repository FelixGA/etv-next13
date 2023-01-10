import { useState, useEffect, useCallback } from "react";
import { get, set } from "idb-keyval";

const isBrowser = typeof window !== "undefined";
let eTarget;

export default function useIdb(key, defaultValue) {
  const [storedValue, setStoredValue] = useState();

  useEffect(() => {
    if (!isBrowser) return;
    eTarget = new EventTarget();
    async function getStoredValue() {
      const storedValue = await get(key);
      updateStoredValue(storedValue ?? defaultValue);
    }
    getStoredValue();
  }, []);

  useEffect(() => {
    if (!isBrowser) return;
    eTarget.addEventListener("storage_change", listener);
    return () => eTarget.removeEventListener("storage_change", listener);
  }, [listener]);

  async function listener(e) {
    if (e.detail.key === key) {
      const storedValue = await get(key);
      setStoredValue(storedValue);
    }
  }

  const updateStoredValue = useCallback(
    (updatedValue) => {
      setStoredValue(updatedValue);
      set(key, updatedValue);
      eTarget.dispatchEvent(
        new CustomEvent("storage_change", { detail: { key } })
      );
    },
    [key]
  );

  return [storedValue, updateStoredValue];
}
