export const shortenString = (startLen: number, endLen: number, fullString: string) =>
  `${fullString.substring(0, startLen)}...${fullString.substring(fullString.length - endLen, fullString.length)}`;

type ConditionalClass = [boolean, ...(string | ConditionalClass)[]];

/**
 * This function allows you to combine sevral classNames together.
 * For conditional classes, just pass in the condition (boolean)
 * as the first elemnt in the array and pass the classes you want
 * to merge as the other items in the array.
 */
export const mergeClasses = (...args: (string | ConditionalClass)[]): string => {
  return args.reduce((accumulator: string, currentValue) => {
    if (Array.isArray(currentValue)) {
      const bool = currentValue.shift();
      if (bool) return `${accumulator} ${mergeClasses(...(currentValue as (string | ConditionalClass)[]))}`;
      return accumulator;
    }
    if (!currentValue) return accumulator;
    return `${accumulator ? `${accumulator} ` : ''}${currentValue}`;
  }, '');
};

export const makeid = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const toHexString = (array: Uint8Array) => {
  // buffer is an ArrayBuffer
  return Array.prototype.map.call(new Uint8Array(array.buffer), (x) => `00${x.toString(16)}`.slice(-2)).join('');
};

export const toReadableDate = (date: string) => {
  const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const dateObj = new Date(date);
  return `${shortMonthNames[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};
