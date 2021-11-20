import { useUser } from "@auth0/nextjs-auth0"
import { useState } from "react"
import Dashboard from "../../pages/dashboard"
import CreateEvent from "../CreateEvent/CreateEvent"
import GridOfEvents from "../GridOfEvents/GridOfEvents"
const MyEventsDashboard = () => {
  const { user } = useUser()
  const [currentComponent, setCurrentComponent] =
    useState<string>("GridOfEvents")
  const displayComponent = (componentName: string): JSX.Element => {
    switch (componentName) {
      case "GridOfEvents":
        return (
          <GridOfEvents
            apiURL="/api/event"
            setCurrentComponent={setCurrentComponent}
            user={user}
          />
        )
      case "CreateEvent":
        if (user)
          return (
            <CreateEvent
              setCurrentComponent={setCurrentComponent}
              user={user}
            />
          )
      case "MyEventsDashboard":
        return <MyEventsDashboard />
      default:
        throw new Error("displayComponent: componentName not found")
    }
  }
  return <div>{displayComponent(currentComponent)}</div>
}

export default MyEventsDashboard
