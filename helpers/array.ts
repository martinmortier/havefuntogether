//Slice the first element of an array according to array length maximum
export const sliceFirstElement = <T>(array: T[], lengthMax: number): T[] => {
  let newArray: T[] = []
  if (array.length > lengthMax) {
    newArray = array.slice(1)
  }
  return newArray
}
