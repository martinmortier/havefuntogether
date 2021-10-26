import { useEffect } from "react"
import styles from "../styles/dashboard.module.css"
import NavbarLeft from "../components/NavbarLeft/NavbarLeft"
import Main from "../components/Main/Main"
import RightMenu from "../components/RightMenu/RightMenu"
import type { NextPage } from "next"
import { useUser } from "@auth0/nextjs-auth0"
import Router from "next/router"
const Dashboard: NextPage = () => {
  const { user, isLoading } = useUser()
  useEffect(() => {
    if (!user && !isLoading) Router.push("/")
  }, [user, isLoading])

  if (!isLoading && user)
    return (
      <div className={styles.container}>
        <div>
          <NavbarLeft />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <div>
          <RightMenu />
        </div>
      </div>
    )
  else return <p>Loading...</p>
}

export default Dashboard
