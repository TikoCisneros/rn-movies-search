import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

type UseAsyncStorage<T> = [T | null, (data: T) => T | null, () => void];

const useAsyncStorage = <T>(key: string): UseAsyncStorage<T> => {
  const [storageItem, setStorageItem] = useState<T | null>(null);

  const getStorageItem = async () => {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      setStorageItem(JSON.parse(data) as T);
    }
  };

  const updateStorageItem = (data: T) => {
    const jsonData = JSON.stringify(data);
    AsyncStorage.setItem(key, jsonData);
    setStorageItem(data);
    return data;
  };

  const clearStorageItem = () => {
    AsyncStorage.removeItem(key);
    setStorageItem(null);
  };

  useEffect(() => {
    getStorageItem();
  }, [key]);

  return [storageItem, updateStorageItem, clearStorageItem];
};

export default useAsyncStorage;
