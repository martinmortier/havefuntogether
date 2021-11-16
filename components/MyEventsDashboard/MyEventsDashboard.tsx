import { useState } from "react"
import CreateEvent from "../CreateEvent/CreateEvent"
import GridOfEvents from "../GridOfEvents/GridOfEvents"
const MyEventsDashboard = () => {
  const [currentComponent, setCurrentComponent] =
    useState<string>("GridOfEvents")
  const displayComponent = (componentName: string): JSX.Element => {
    switch (componentName) {
      case "GridOfEvents":
        return (
          <GridOfEvents
            apiURL="/api/event"
            setCurrentComponent={setCurrentComponent}
          />
        )
      case "CreateEvent":
        return <CreateEvent />
      default:
        throw new Error("displayComponent: componentName not found")
    }
  }
  return <div>{displayComponent(currentComponent)}</div>
}

export default MyEventsDashboard