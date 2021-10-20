import styles from "../NavbarTop/NavbarTop.module.css"
import NavbarTopMenuItem from "../NavbarTopMenuItem/NavbarTopMenuItem"
import Button from "@mui/material/Button"
const NavbarTop = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <p className={styles.LeftPanel}>IMG</p>
      <NavbarTopMenuItem text="Home" icon={true} />
      <NavbarTopMenuItem text="Home" icon={true} />
      <NavbarTopMenuItem text="Home" icon={true} />
      <div className={styles.RightPanel}>
        <div className={styles.LoginPanel}>
          <Button variant="contained">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/api/auth/login">Sign In</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
