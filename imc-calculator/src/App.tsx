import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { levels, calculateIMC, Level }from './helpers/imc';
import { GridItem } from './components/GridItem';
export const App =() => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)


  const handleCalculate = () => {
    if(altura && peso){
      setToShow(calculateIMC(altura, peso));
    }else{
      alert("Digite todos os campos.");
    }
  }

  const handleBack = () => {
    setToShow(null);
    setAltura(0);
    setPeso(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input type="number" placeholder="Digite sua altura. Ex: 1.5 (em metros)" value={altura > 0 ? altura : ""} onChange={e => setAltura(parseFloat(e.target.value))} disabled={toShow ? true : false}/>
          <input type="number" placeholder="Digite seu peso. Ex: 75.3 (em kg)" value={peso > 0 ? peso : ""} onChange={e => setPeso(parseFloat(e.target.value))} disabled={toShow ? true : false}/>
          <button onClick={handleCalculate} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) =>(
                <GridItem key={key} item={item}/>
              ))}  
            </div>
          }
          {toShow &&
            <div className={styles.levelBig}>
              <div className={styles.Back} onClick={handleBack}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          } 
        </div>
      </div>
    </div>
  );
}