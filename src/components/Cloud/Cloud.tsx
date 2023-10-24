import styles from './Cloud.module.css';

const Cloud = () => {
  
  const getLetter = (input: string = "love") => {
    return input[Math.floor(Math.random() * input.length)];
  }

  const rain = () => {
    let cloud = document.querySelector('#cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 320);
    let size = Math.random() * 1.5;
    

    e.classList.add(styles.text);
    cloud?.appendChild(e);
    e.innerText = getLetter();
    e.style.left = left + "px";
    e.style.fontSize = 0.5 * size + 'em';


    setTimeout(() => {
      cloud?.removeChild(e);
    }, 600);
  };

  setInterval(() => {
    rain();
  }, 100);

  return(
    <div className={styles.container}>
      <div id="cloud" className={styles.cloud}>
      </div>
    </div>
  )
};

export default Cloud;
