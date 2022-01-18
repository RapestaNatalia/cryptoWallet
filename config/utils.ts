import * as SecureStore from "expo-secure-store";
/*
TODO:
Review Intl solution
Add one or two 0 when the number of decimal characters is 1 or 0.
*/
export const formatUSA = (num: string) => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const setSensitiveData = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSensitiveData = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  if (!result) return false;
  return result;
};
