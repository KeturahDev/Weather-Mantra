import { useState } from 'react';
import styles from './Cloud.module.css';

const Cloud = () => {
  const [hideForm, setHideForm] = useState<boolean>(false);
  const [rainIntId, setRainIntId] = useState<number>(0);

  const getLetter = (input: string = "love") => {
    return input[Math.floor(Math.random() * input.length)];
  }
  const rain = (mantra: string) => {
    let cloud = document.querySelector('#cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 320); 
    let size = Math.random() * 1;

    e.classList.add(styles.text);
    cloud?.appendChild(e);
    e.innerText = getLetter(mantra);
    e.style.left = left + "px";
    e.style.fontSize = 0.5 * size + 'em';

    setTimeout(() => {
      cloud?.removeChild(e);
    }, 600);
  };

  const beginRain = (mantra: string) => {
    return setInterval(() => {
      rain(mantra);
    }, 100);
  }

  const killRain = () => {
    clearInterval(rainIntId);
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      mantra: { value: string };
    };
    setHideForm(true);
    setRainIntId(beginRain(target.mantra.value) as unknown as number)
  }

  const handleNewMantra = () => {
    killRain();
    setHideForm(false)
  };

  return (
    <div>
      <div className={styles.container}>
        <div id="cloud" className={styles.cloud} />
      </div>
      <form onSubmit={handleSubmit} className={`${styles.formContainer} ${hideForm ? styles.hidden : null}`} name="submit mantra">
        <input name="mantra" autoComplete='off' type='text' required/>
        <button type='submit'>submit</button>
      </form>
      <button className={`${styles.newMantraButton} ${!hideForm ? styles.hidden : null}`} onClick={handleNewMantra}>new mantra</button>
    </div>
  )
};

export default Cloud;
