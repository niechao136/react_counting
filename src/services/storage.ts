import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = new Storage({
  defaultExpires: 1000 * 3600 * 24 * 7, // 1 week
  enableCache: true,
  size: 1000,
  storageBackend: AsyncStorage,
});
