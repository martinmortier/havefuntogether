import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridSelectionModel,
} from "@mui/x-data-grid"
import { Button } from "@mui/material"
import { Dispatch, useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { Event } from ".prisma/client"
import moment from "moment"
type GridOfEventsProps = {
  apiURL: string
  setCurrentComponent: Dispatch<string>
}
const GridOfEvents = ({ apiURL, setCurrentComponent }: GridOfEventsProps) => {
  const [data, setData] = useState<Event[]>()
  const [columns, setColumns] = useState<GridColDef[]>()
  const [rows, setRows] = useState<GridRowsProp>()
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>()

  const getData = async () => {
    try {
      const response: AxiosResponse = await axios.get(apiURL)
      setData(response.data)
      if (response.data) {
        setRows(getRowsFromObject(response.data))
        setColumns(getColumnsFromObject(response.data[0]))
      }
    } catch (error: unknown) {
      console.log(error)
    }
  }
  //TODO: Add a react hook
  const displayDataGrid = () => {
    if (rows && columns) {
      return (
        <div style={{ display: "flex", height: 550 }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              selectionModel={selectionModel}
              onSelectionModelChange={(newSelectionModel: GridSelectionModel) =>
                setSelectionModel(newSelectionModel)
              }
            />
          </div>
        </div>
      )
    }
  }
  // TODO:Test it
  const deleteEvent = async (eventsId: number[]): Promise<void> => {
    if (!eventsId || eventsId.length === 0) return
    try {
      const response = await axios.delete(`${apiURL}`, { data: eventsId })
      console.log(response.data)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  const handleDelete = (selection: GridSelectionModel | undefined): void => {
    if (!selection || selection.length === 0) return
    const selectionNumber: Array<number> = selection as Array<number>
    const eventsSelected = rows
      ?.filter((row) => selectionNumber.includes(row.id))
      .map((event) => event.idEvent) as Array<number>
    deleteEvent(eventsSelected)
    setSelectionModel(undefined)
    setTimeout(() =>
      setRows((prevRow) =>
        prevRow?.filter((row) => !selectionNumber.includes(row.id))
      )
    )
  }

  useEffect(() => {
    getData()
  }, [])
  // return <> </>
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setCurrentComponent("CreateEvent")}
      >
        Create a new event
      </Button>
      <Button variant="contained" onClick={() => handleDelete(selectionModel)}>
        Delete event(s) selected
      </Button>
      {displayDataGrid()}
    </div>
  )
}

export default GridOfEvents

export const getColumnsFromObject = (event: Event): GridColDef[] => {
  const objectKeys: string[] = Object.keys(event)
  const columns = objectKeys.map((keyObject: string) => ({
    field: keyObject,
    headerName: keyObject.charAt(0).toUpperCase() + keyObject.slice(1), //Convert the first letter in Uppercase
    width: 150,
  }))
  return columns
}
//TODO: Need to be tested
export const getRowsFromObject = (events: Event[]): GridRowsProp => {
  const rows: GridRowsProp = events.map((event: Event, index) => ({
    id: index,
    idEvent: event.idEvent,
    name: event.name,
    place: event.place,
    startDate: moment(event.startDate).format("DD MMM YYYY"),
    endDate: moment(event.endDate).format("DD MMM YYYY"),
  }))
  return rows
}
