import { ChangeEvent, useMemo, useState } from "react"
import { io } from "socket.io-client"
import { FormEvent, useEffect } from "react"
import { useUser } from "@auth0/nextjs-auth0"
import { Button, TextField } from "@mui/material"
import { sliceFirstElement } from "../../helpers/array"
interface Message {
  nickname: string
  content: string
}
const url = process.env.NODE_ENV === "test" ? "" : "http://localhost:3001/"
const socket = io(url)
const MAXIMUM_LENGTH = 7
const Chat = (): JSX.Element => {
  const { user } = useUser()
  const [messages, setMessages] = useState<Array<Message>>([])
  const [newMessage, setNewMessage] = useState<string>("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (user?.name && newMessage) {
      const message: Message = {
        nickname: user.name,
        content: newMessage,
      }

      setMessages(messages.concat(message))
      //TODO: Test socket
      socket.emit("chat message", message)
      socketDisconnect()
      setNewMessage("")
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setNewMessage(event.target.value)
  }

  socket.on("chat message", (msg: Message) => {
    setMessages(messages.concat(msg))
  })

  const socketDisconnect = (): void => {
    socket.disconnect
  }
  useEffect(() => {
    const arraySlice: Message[] = sliceFirstElement(messages, MAXIMUM_LENGTH)
    if (arraySlice.length > 0) setMessages(arraySlice)
    return () => socketDisconnect()
  }, [messages])
  return (
    <div>
      <h1>Chat !</h1>
      {messages.map((msg: Message, index: number) => (
        <div key={index}>
          <p>{msg.nickname}</p>
          <p>Message: {msg.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          onChange={handleChange}
          placeholder="Type a message..."
          value={newMessage}
          sx={{ width: "100%" }}
        />{" "}
        <br />
        <Button variant="contained" type="submit" sx={{ width: "100%" }}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default Chat
