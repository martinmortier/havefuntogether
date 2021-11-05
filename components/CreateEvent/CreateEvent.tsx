import styles from "./CreateEvent.module.css"
import { Button, TextField, TextFieldProps } from "@mui/material"
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <Button type="submit" variant="contained">
          Create
        </Button>
      </form>
    </div>
  )
}

export default CreateEvent
