import styles from "../NavbarTop/NavbarTop.module.css"
import NavbarTopMenuItem from "../NavbarTopMenuItem/NavbarTopMenuItem"
import Button from "@mui/material/Button"
import { MdOutlineWavingHand } from "react-icons/md"
const NavbarTop = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.leftPanelText}>
          <span className={styles.iconContainer}>
            <MdOutlineWavingHand className={styles.icon} />
          </span>{" "}
          Havefuntogether
        </div>
      </div>
      <div>
        <NavbarTopMenuItem text="Home" icon={true} />
        <NavbarTopMenuItem text="About" icon={true} />
        <NavbarTopMenuItem text="Contact" icon={true} />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.loginPanel}>
          <Button className={styles.buttonStyle} variant="contained">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/api/auth/login">Sign In</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
