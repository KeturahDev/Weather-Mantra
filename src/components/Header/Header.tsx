import Copy from "../../util/Copy";
import styles from "./Header.module.css"

const Header = () => {
   return (
    <h2 className={styles.body}>{Copy.title}</h2>
   )
};

export default Header;
