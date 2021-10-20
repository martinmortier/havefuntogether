import Button from "@mui/material/Button"
import { IoIosArrowDown } from "react-icons/io"
import styles from "./NavbarTopMenuItem.module.css"
type NavbarTopMenuItemProps = {
  text: string
  icon: boolean
}
const NavbarTopMenuItem = ({
  text,
  icon,
}: NavbarTopMenuItemProps): JSX.Element => {
  return (
    <>
      <Button className={styles.buttonStyle}>
        {text}
        {icon && <IoIosArrowDown />}
      </Button>
    </>
  )
}

export default NavbarTopMenuItem
