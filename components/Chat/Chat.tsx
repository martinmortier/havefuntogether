import { ChangeEvent, useState } from "react"
import { io } from "socket.io-client"
import { FormEvent, useEffect } from "react"
import { useUser } from "@auth0/nextjs-auth0"
import { Button, TextField } from "@mui/material"
import { sliceFirstElement } from "../../helpers/array"
interface Message {
  nickname: string
  content: string
}

const Chat = (): JSX.Element => {
  const { user } = useUser()
  const [messages, setMessages] = useState<Array<Message>>([])
  const [newMessage, setUserMessage] = useState<string>("")
  const socket = io("http://localhost:3001/")

  //TODO:Test it
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (user && user.name) {
      const message: Message = {
        nickname: user.name,
        content: newMessage,
      }

      setMessages(messages.concat(message))
      socket.emit("chat message", message)
      socketDisconnect()
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setUserMessage(event.target.value)
  }

  socket.on("chat message", (msg: Message) => {
    setMessages(messages.concat(msg))
  })

  const socketDisconnect = (): void => {
    socket.disconnect
  }
  useEffect(() => {
    const arraySlice: Message[] = sliceFirstElement(messages, 7)
    if (arraySlice.length > 0) setMessages(arraySlice)
    return () => socketDisconnect()
  }, [messages])

  return (
    <div>
      <h1>Chat !</h1>
      {messages.length > 0 &&
        messages.map((msg: Message, index) => (
          <div key={index}>
            <p>{msg.nickname}</p>
            <p>{msg.content}</p>
          </div>
        ))}
      <form onSubmit={handleSubmit}>
        <TextField type="text" onChange={handleChange} sx={{ width: "100%" }} />{" "}
        <br />
        <Button variant="contained" type="submit" sx={{ width: "100%" }}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default Chat
