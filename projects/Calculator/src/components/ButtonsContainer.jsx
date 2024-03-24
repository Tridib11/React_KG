import styles from "./ButtonsContainer.module.css"
export const ButtonsContainer = () => {

  const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map(buttonNames =>{
       return  <button key={Math.random()} className={styles.button}>{buttonNames}</button>
      })}
    </div>
  );
};
