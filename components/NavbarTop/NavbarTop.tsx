import styles from "../NavbarTop/NavbarTop.module.css"
import NavbarTopMenuItem from "../NavbarTopMenuItem/NavbarTopMenuItem"
import Button from "@mui/material/Button"
import { useUser } from "@auth0/nextjs-auth0"
import Image from "next/image"
import Link from "next/link"
import LogoName from "../LogoName/LogoName"

const NavbarTop = (): JSX.Element => {
  const { user } = useUser()
  return (
    <div className={styles.container}>
      <div className={styles.leftPanelIconText}>
        <LogoName />
      </div>
      <div className={styles.links}>
        <NavbarTopMenuItem text="Home" icon={true} />
        <NavbarTopMenuItem text="About" icon={true} />
        <NavbarTopMenuItem text="Contact" icon={true} />
        {user && (
          <>
            <Button variant="outlined">
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Button>
          </>
        )}
      </div>
      <div className={styles.loginPanel}>
        {!user ? (
          <Button className={styles.buttonStyle} variant="contained">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/api/auth/login">Sign In</a>
          </Button>
        ) : (
          <>
            <Image src={`${user.picture}`} width={64} height={64} />
            <Button>
              <a href="/api/auth/logout">Logout</a>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default NavbarTop
