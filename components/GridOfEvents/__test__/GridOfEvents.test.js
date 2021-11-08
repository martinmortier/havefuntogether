import { nodeModuleNameResolver } from "typescript"
import { getColumnsFromObject } from "../GridOfEvents"
describe("GridOfEvents tests", () => {
  test("Convert the object key in grid column", () => {
    const object = {
      name: "Column 1",
      place: "Place 1",
    }
    const finalColumns = [
      {
        field: "name",
        headerName: "Name",
        width: 150,
      },
      {
        field: "place",
        headerName: "Place",
        width: 150,
      },
    ]
    const columns = getColumnsFromObject(object)
    expect(columns).toEqual(finalColumns)
  })
})
