import { Autocomplete, Button, TextField, TextFieldProps } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import DateAdapter from "@mui/lab/AdapterMoment"
import { LocalizationProvider, DateTimePicker } from "@mui/lab"
import { Event } from ".prisma/client"

const CreateEvent = () => {
  const [name, setName] = useState<string>("")
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(new Date())
  const [place, setPlace] = useState<string>("")

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
  ]
  //TODO:Test API
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (startDate && endDate) {
      const newEvent: Event = {
        idEvent: 0,
        name: name,
        place: place,
        startDate: startDate,
        endDate: endDate,
      }
      try {
        await axios.post("/api/event", newEvent)
      } catch (error: unknown) {
        throw new Error(`${error}`)
      }
    }
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(e.target.id)
    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        break
      case "place":
        setPlace(e.target.value)
        break
      default:
        throw new Error("Event id not found")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Event name"
          variant="standard"
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Start date"
            value={startDate}
            onChange={(date: Date | null) => {
              setStartDate(date)
            }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="End date"
            value={endDate}
            onChange={(date: Date | null) => {
              setEndDate(date)
            }}
          />
        </LocalizationProvider>
        <TextField
          id="place"
          label="Place"
          variant="standard"
          onChange={handleChange}
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}

export default CreateEvent
