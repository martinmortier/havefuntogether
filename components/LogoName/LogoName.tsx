import styles from "./LogoName.module.css"
import { MdOutlineWavingHand } from "react-icons/md"
const LogoName = (): JSX.Element => {
  return (
    <div className={styles.iconText}>
      <span>
        <MdOutlineWavingHand className={styles.icon} />
      </span>{" "}
      Havefuntogether
    </div>
  )
}

export default LogoName
