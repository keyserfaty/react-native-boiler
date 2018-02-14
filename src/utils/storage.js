import { AsyncStorage } from 'react-native'

export const setStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (error) {
    return error
  }
}

export const getStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    return error
  }
}

export const removeStorage = async (key) => {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (error) {
    return error
  }
}

export const getAllStorage = () => {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        let key = store[i][0];
        let value = store[i][1];
        console.log(key, value)
      });
    });
  });
}