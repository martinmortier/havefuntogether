import Button from "@mui/material/Button"
import { IoIosArrowDown } from "react-icons/io"

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
      <Button>
        {text}
        {icon && <IoIosArrowDown />}
      </Button>
    </>
  )
}

export default NavbarTopMenuItem
