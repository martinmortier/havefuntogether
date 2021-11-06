import { render, fireEvent, screen } from "@testing-library/react"
import CreateEvent from "../CreateEvent"
import { UserProvider } from "@auth0/nextjs-auth0"

describe("Tests CreateEvent component", () => {
  beforeAll(() => {
    render(
      <UserProvider user={{ name: "martin" }}>
        <CreateEvent />
      </UserProvider>
    )
  })

  test("Test function displayHideAlert", () => {
    const button = screen.getByText(/create/i)
    fireEvent.click(button)
    const alert = screen.getByText(/error/i)
    expect(alert).toBeInTheDocument
  })
})
