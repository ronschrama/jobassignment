import styles from "../styles/Home.module.css";
const foodsyLogo = require("../assets/images/foodsylogo.svg") as string

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={foodsyLogo} />
    </header>
  )
}
