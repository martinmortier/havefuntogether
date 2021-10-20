import styles from "../NavbarTop/NavbarTop.module.css"
const NavbarTop = () => {
  return (
    <div>
      <h1 className={styles.text}>Test</h1>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Log out</a>
    </div>
  )
}

export default NavbarTop
