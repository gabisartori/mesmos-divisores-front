import './style.css';

async function chamar(){
    const input = document.getElementById('num') as HTMLInputElement;
    const num = input.value;
    const response = await fetch(`http://localhost:3001/${num}`);
    console.log(response);
} 

export default function MainBox() {
  return (
    <div>
        <h1>Insira o número</h1>
        <input type="number" id="num" />
        <button onClick={chamar}>Enviar</button>
    </div>
  );
}