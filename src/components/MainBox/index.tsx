import * as C from './style';

type Chamada = {
  total: number,
  tempo: number,
}

async function chamar(){
    const input = document.getElementById('num') as HTMLInputElement;
    const num = input.value;
    const response = await fetch(
      `http://localhost:3001/number/${num}`,
      {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Origin': 'http://localhost:3000',
        // }
      }
      ).then((res) => res.json()).then((data) => {
        console.log(`O total de números com a mesma quantidade de divisores é ${data.total}`);
        console.log(`O tempo de execução foi ${data.tempo}ms`);
      });
    
} 

export default function MainBox() {
  return (
    <C.MainBox>
        <C.Text>Insira um número</C.Text>
        <C.NumberInput type="number" id="num" />
        <C.Button onClick={chamar}>Clique aqui👍</C.Button>
    </C.MainBox>
  );
}