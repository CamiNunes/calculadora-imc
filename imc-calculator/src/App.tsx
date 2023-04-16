import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateIMC }from './helpers/imc';
import { GridItem } from './components/GridItem';
export const App =() => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);


  const handleCalculate = () => {
    if(altura && peso){
      alert("Campos digitados.");
    }else{
      alert("Digite todos os campos.");
    }
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
          <input type="number" placeholder="Digite sua altura. Ex: 1.5 (em metros)" value={altura > 0 ? altura : ""} onChange={e => setAltura(parseFloat(e.target.value))} />
          <input type="number" placeholder="Digite seu peso. Ex: 75.3 (em kg)" value={peso > 0 ? peso : ""} onChange={e => setPeso(parseFloat(e.target.value))}/>
          <button onClick={handleCalculate}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) =>(
              <GridItem key={key} item={item}/>
            ))}  
          </div>
        </div>
      </div>
    </div>
  );
}