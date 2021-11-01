import { UserProvider } from "@auth0/nextjs-auth0"
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
  act,
} from "@testing-library/react"
import Chat from "../Chat"

describe("Testing connection", () => {
  beforeEach(() => {
    render(
      <UserProvider user={{ name: "martin" }}>
        <Chat />
      </UserProvider>
    )
  })

  afterEach(() => {
    cleanup()
  })
  test("type message then reset when button is clicked", () => {
    const input = screen.getByPlaceholderText(/type a message/i)
    fireEvent.change(input, { target: { value: "A new message" } })
    const button = screen.getByText(/send/i)
    fireEvent.click(button)
    expect(input.value).toBe("")
  })

  test("type a message then display", () => {
    const input = screen.getByPlaceholderText(/type a message/i)
    fireEvent.change(input, { target: { value: "A new message" } })
    const button = screen.getByText(/send/i)
    fireEvent.click(button)

    expect(screen.getByText("Message: A new message")).toBeInTheDocument
  })
})
