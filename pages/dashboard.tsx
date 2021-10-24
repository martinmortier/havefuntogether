import styles from "../styles/dashboard.module.css"
import NavbarLeft from "../components/NavbarLeft/NavbarLeft"
import Main from "../components/Main/Main"
import RightMenu from "../components/RightMenu/RightMenu"
import type { NextPage } from "next"

const Dashboard: NextPage = () => {
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
}

export default Dashboard
