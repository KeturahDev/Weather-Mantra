import { useState } from 'react';
import styles from './Cloud.module.css';

const Cloud = () => {
  const [hideForm, setHideForm] = useState<boolean>(false);
  const getLetter = (input: string = "love") => {
    return input[Math.floor(Math.random() * input.length)];
  }

  const rain = (mantra: string) => {
    let cloud = document.querySelector('#cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 320);
    let size = Math.random() * 1.5;
    

    e.classList.add(styles.text);
    cloud?.appendChild(e);
    e.innerText = getLetter(mantra);
    e.style.left = left + "px";
    e.style.fontSize = 0.5 * size + 'em';


    setTimeout(() => {
      cloud?.removeChild(e);
    }, 600);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      mantra: { value: string };
    };
    console.log(target.mantra.value);
    setHideForm(true);
    setInterval(() => {
      rain(target.mantra.value);
    }, 100);
  }

  return(
    <div>
      <div className={styles.container}>
        <div id="cloud" className={styles.cloud}/>
      </div>
      <form onSubmit={handleSubmit} className={`${styles.formContainer} ${hideForm ? styles.hidden : null}`} name="submit mantra">
        <input name="mantra" type='text'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
};

export default Cloud;
