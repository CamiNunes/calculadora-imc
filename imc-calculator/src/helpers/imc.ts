export type Level ={
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: number[],
  ypurImc?: number
}

export const levels: Level[] = [
  { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5]}  ,
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9]},
  { title: 'Obesidade', color: '#E2B036', icon: 'down', imc: [25, 30]},
  { title: 'Sobrepeso', color: '#C3423F', icon: 'down', imc: [30.1, 99]} 
];

export const calculateIMC = (altura: number, peso: number) =>{
  const imc = peso / (altura * altura);

  for (let i in levels){
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
      levels[i].ypurImc = imc;
      return levels[i];
    }
  }

  return null;
}