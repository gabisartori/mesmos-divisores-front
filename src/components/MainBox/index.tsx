import * as C from './style';

async function chamar(){
    const input = document.getElementById('num') as HTMLInputElement;
    const num = input.value;
    const response = await fetch(`http://localhost:3001/${num}`);
    console.log(response);
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