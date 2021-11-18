import styles from "./CreateEvent.module.css"
import { Button, TextField, Alert, AlertColor, Typography } from "@mui/material"
import { ChangeEvent, Dispatch, FormEvent, useState } from "react"
import axios from "axios"
import DateAdapter from "@mui/lab/AdapterMoment"
import { LocalizationProvider, DateTimePicker } from "@mui/lab"
import { Event } from ".prisma/client"

type CreateEventProps = {
  setCurrentComponent: Dispatch<string>
}
const CreateEvent = ({ setCurrentComponent }: CreateEventProps) => {
  const [name, setName] = useState<string>("")
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [place, setPlace] = useState<string>("")
  const [alert, setAlert] = useState<AlertColor | undefined>(undefined)

  const displayHideAlert = (state: AlertColor) => {
    setAlert(state)
    const seconds = 5000
    setTimeout(() => setAlert(undefined), seconds)
  }

  const cleanFields = () => {
    setName("")
    setStartDate(null)
    setEndDate(null)
    setPlace("")
  }

  //TODO:Test API + Clean fields
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
        cleanFields()
        displayHideAlert("success")
      } catch (error: unknown) {
        displayHideAlert("error")
      }
    } else {
      displayHideAlert("error")
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
      <div className={styles.previousPageContainer}>
        <Button
          variant="outlined"
          onClick={() => setCurrentComponent("MyEventsDashboard")}
        >
          Previous page
        </Button>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="subtitle1">Create a new event ! </Typography>
        <TextField
          id="name"
          label="Event name"
          variant="standard"
          onChange={handleChange}
          value={name}
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
          value={place}
        />
        <Button type="submit" variant="contained">
          Create
        </Button>
        {alert && <Alert severity={alert}>{alert}</Alert>}
      </form>
    </div>
  )
}

export default CreateEvent
