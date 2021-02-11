export const shortenString = (startLen: number, endLen: number, fullString: string) =>
  `${fullString.substring(0, startLen)}...${fullString.substring(fullString.length - endLen, fullString.length)}`;
