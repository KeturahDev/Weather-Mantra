import '../App.css';
import Copy from "../util/Copy";

const Footer = () => {
  return (
    <footer className="Footer">
      © Copyright {new Date().getFullYear()} {Copy.title}. Made by{' '}
        <a href="https://github.com/KeturahDev">Keturah Howard</a>.
    </footer>
  )
};

export default Footer;
