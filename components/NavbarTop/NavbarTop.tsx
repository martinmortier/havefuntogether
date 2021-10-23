import styles from "../NavbarTop/NavbarTop.module.css"
import NavbarTopMenuItem from "../NavbarTopMenuItem/NavbarTopMenuItem"
import Button from "@mui/material/Button"
import { MdOutlineWavingHand } from "react-icons/md"
import { useUser } from "@auth0/nextjs-auth0"
import Image from "next/image"
import Link from "next/link"
const NavbarTop = (): JSX.Element => {
  const { user } = useUser()
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
      {user && (
        <div>
          <Button variant="outlined">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </Button>
        </div>
      )}
      <div className={styles.rightPanel}>
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
    </div>
  )
}

export default NavbarTop
