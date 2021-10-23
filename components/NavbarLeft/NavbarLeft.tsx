import styles from "./NavbarLeft.module.css"
import LogoName from "../LogoName/LogoName"

const NavbarLeft = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <LogoName />
      <h2 className={styles.h2}>Social</h2>
      <h2 className={styles.h2}>Menu</h2>
      <h2 className={styles.h2}>Other</h2>
    </div>
  )
}

export default NavbarLeft
