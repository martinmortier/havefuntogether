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
    switch (e.target.value) {
      case "":
      default:
        throw new Error("Event target not found")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <Input id="test" type="text" onChange={(e) => handleChange(e)} />
        <p>Date: </p>
        <Input type="date" />
        <p>Place</p>
        <Input type="text" />
        {/* TODO:Add google map API */}
        <Button>Create</Button>
      </form>
    </div>
  )
}

export default CreateEvent