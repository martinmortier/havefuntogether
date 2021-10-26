import { sliceFirstElement } from "../array"
test("remove the first element when the length of the array is > max ", () => {
  const array = ["A", "B", "C"]
  const arrayFinal = ["B", "C"]
  expect(sliceFirstElement(array, 2)).toEqual(arrayFinal)
})
