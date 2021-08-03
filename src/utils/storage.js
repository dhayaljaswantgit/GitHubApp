import AsyncStorage from '@react-native-community/async-storage';

export function setData(key, data) {
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }

  AsyncStorage.setItem(key, data);
}
export function getData(key, isJson = false) {
  return new Promise(async resolve => {
    let data = await AsyncStorage.getItem(key);
    if (data && isJson) {
      try {
        return resolve(JSON.parse(data));
      } catch (e) {
        resolve(null);
      }
    }

    resolve(data);
  });
}
