export const convertArrayToString = (arrayToConvert) => {
  const stringArray = arrayToConvert.toString();
  let stringNoCommas = stringArray;

  for (let i = 0; i < arrayToConvert.length - 1; i++) {
    stringNoCommas = stringNoCommas.replace(",", " ");
  }

  return stringNoCommas;
};
