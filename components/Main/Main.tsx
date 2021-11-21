import MyEventsDashboard from "../MyEventsDashboard/MyEventsDashboard"
import styles from "./Main.module.css"
import mainComponent from "../../helpers/mainComponent"
type MainProps = {
  currentComponent: mainComponent
}
const Main = ({ currentComponent }: MainProps): JSX.Element => {
  const returnComponent = (currentComponent: string): JSX.Element => {
    const components = {
      MyEventsDashboard,
    }
    const Component = components[currentComponent]
    return <Component />
  }
  return <div>{returnComponent(currentComponent)}</div>
}
export default Main
