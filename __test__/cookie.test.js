import { getCookieByName } from "../helpers/cookie"
test("Get cookie by name", () => {
  expect(getCookieByName("value")).toBe("value")
})
