import styles from "./NavbarLeft.module.css"
import LogoName from "../LogoName/LogoName"
import { MdOutlineEventNote } from "react-icons/md"
import { Dispatch, SetStateAction } from "react"
import mainComponent from "../../helpers/mainComponent"
import { Typography } from "@mui/material"
type NavbarLeftProps = {
  setCurrentComponent: Dispatch<SetStateAction<mainComponent>>
}
const NavbarLeft = ({ setCurrentComponent }: NavbarLeftProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <LogoName />
      <h2 className={styles.h2}>Social</h2>
      <h2 className={styles.h2}>Menu</h2>
      <div
        className={styles.default}
        onClick={() => setCurrentComponent(mainComponent.MyEventsDashboard)}
      >
        <Typography variant={"h6"}>
          <MdOutlineEventNote /> My events
        </Typography>
      </div>
      <h2 className={styles.h2}>Other</h2>
    </div>
  )
}

export default NavbarLeft
