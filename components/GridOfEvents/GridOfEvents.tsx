import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { Event } from ".prisma/client"

type GridOfEventsProps = {
  apiURL: string
}
const GridOfEvents = ({ apiURL }: GridOfEventsProps) => {
  const [data, setData] = useState<Event[]>()
  const [columns, setColumns] = useState<GridColDef[]>()
  apiURL = "/api/event"

  const getData = async () => {
    try {
      const response: AxiosResponse = await axios.get(apiURL)
      setData(response.data)
      response.data && setColumns(getColumnsFromObject(response.data[0]))
    } catch (error: unknown) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [apiURL])
  return <>{/* <DataGrid rows={1} columns={1} /> */}</>
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
