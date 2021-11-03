import { Button, Input } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"
const CreateEvent = () => {
  const [name, setName] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [place, setPlace] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        break
      case "date":
        setDate(e.target.value)
        break
      case "place":
        setPlace(e.target.value)
        break
      default:
        console.log("value", e.target.id)
        throw new Error("Event id not found")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <Input id="name" type="text" onChange={(e) => handleChange(e)} />
        <p>Date: </p>
        <Input id="date" type="date" onChange={(e) => handleChange(e)} />
        <p>Place</p>
        <Input type="place" onChange={(e) => handleChange(e)} />
        {/* TODO:Add google map API */}
        <Button>Create</Button>
      </form>
    </div>
  )
}

export default CreateEvent
