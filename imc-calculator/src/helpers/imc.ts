export type Level ={
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: number[],
  yourImc?: number
}

export const levels: Level[] = [
  { title: 'Magreza', color: '#E2B036', icon: 'down', imc: [0, 18.5]},
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.99]},
  { title: 'Obesidade', color: '#d16038', icon: 'down', imc: [25, 30.99]},
  { title: 'Sobrepeso', color: '#C3423F', icon: 'down', imc: [30.1, 99]} 
];

export const calculateIMC = (altura: number, peso: number) =>{
  const alturaAoQuadrado = altura * altura;
  const imc = peso / alturaAoQuadrado;

  for (let i in levels){
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
      let levelCopy: Level = {...levels[i]};
      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }

  return null;
}