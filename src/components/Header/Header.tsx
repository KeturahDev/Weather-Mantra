import Copy from "../../util/Copy";
import styles from "./Header.module.css"
import '../../App.css';

const Header = () => {
   return (
    <div className={styles.body}>
      <h2>{Copy.title}</h2>
      <p id="subtitle" className="small-text">Enter a word or phrase you want to meditate on</p>
    </div>
   )
};

export default Header;
