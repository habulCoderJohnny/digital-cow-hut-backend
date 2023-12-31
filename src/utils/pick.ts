const pick = <T extends {}, K extends keyof T>(
  obj: T,
  keys: K[]
): Partial<T> => {
  const finalObject: Partial<T> = {};
  for (const key of keys) {
    if (Object.hasOwnProperty.call(obj, key)) finalObject[key] = obj[key];
  }
  return finalObject;
};

export default pick;
