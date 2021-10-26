import styles from "./RightMenu.module.css"
import Chat from "../Chat/Chat"
const RightMenu = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Right Menu</h1>
      <Chat />
    </div>
  )
}

export default RightMenu
