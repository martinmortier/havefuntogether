import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { Event } from ".prisma/client"
import moment from "moment"
type GridOfEventsProps = {
  apiURL: string
}
const GridOfEvents = ({ apiURL }: GridOfEventsProps) => {
  const [data, setData] = useState<Event[]>()
  const [columns, setColumns] = useState<GridColDef[]>()
  const [rows, setRows] = useState<GridRowsProp>()
  apiURL = "/api/event"

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

  const displayDataGrid = () => {
    if (rows && columns) {
      return <DataGrid rows={rows} columns={columns} />
    }
  }
  useEffect(() => {
    getData()
  }, [apiURL])
  // return <> </>
  return <div>{displayDataGrid()}</div>
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
