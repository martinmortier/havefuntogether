import { io } from "socket.io-client"
import { FormEvent, FormEventHandler, useEffect } from "react"
const Chat = (): JSX.Element => {
  const socket = io("http://localhost:3001/")

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const message = {
      nickname: "Martin",
      message: "text function",
    }
    socket.emit("chat message", message)
  }

  const socketDisconnect = (): void => {
    socket.disconnect
  }
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.connected)
    })
    return () => socketDisconnect()
  }, [socket])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Envoie</button>
      </form>
    </div>
  )
}

export default Chat
