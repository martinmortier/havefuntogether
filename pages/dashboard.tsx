import NavbarLeft from "../components/NavbarLeft/NavbarLeft"
import type { NextPage } from "next"

const Dashboard: NextPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavbarLeft />
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
