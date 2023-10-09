export const currentEpoch = (): number => {
  const epoch: number = new Date().valueOf();

  return epoch;
};
