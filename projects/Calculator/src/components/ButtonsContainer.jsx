import styles from "./Buttons.module.css"
export const ButtonsContainer = () => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
    </div>
  );
};
