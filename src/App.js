import logo from './logo.svg';
import './index.css';
import React, {useState} from 'react'

function App() {
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcImc = (event) => {
    event.preventDefault();

    if (peso === '0' || altura === '') {
      alert('Por favor, insira um peso e altura válidos');
    } else {
      const alturaMetros = altura / 100;

      let imc = peso / (alturaMetros * alturaMetros);
      setResultado(imc.toFixed(1));

      if (imc < 18.5) {
        setMensagem('Abaixo do Peso');
      } else if (imc >= 18.5 && imc <= 24.9) {
        setMensagem('Peso Ideal (Parabéns)');
      } else if (imc >= 25.0 && imc <= 29.9) {
        setMensagem('Levemente Acima do Peso');
      } else if (imc >= 30.0 && imc <= 34.9) {
        setMensagem('Obesidade Grau I');
      } else if (imc >= 35.0 && imc <= 39.9) {
        setMensagem('Obesidade Grau II (Severa)');
      } else {
        setMensagem('Obesidade Grau III (Mórbida)');
      }
    }
  };

  const resetFields = () => {
    setPeso('0');
    setAltura('');
    setResultado(null);
    setMensagem('');
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Calculadora IMC</h2>
        <form onSubmit={calcImc}>
          <div>
            <label>Peso (Kg)</label>
            <input
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              type="number"
              placeholder="Digite o peso"
            />
          </div>
          <div>
            <label>Altura (cm)</label>
            <input
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              type="number"
              placeholder="Digite a altura"
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Calcular
            </button>
            <button className="btn btn-outline" type="button" onClick={resetFields}>
              Reset
            </button>
          </div>
        </form>
        {resultado !== null && (
          <div>
            <h3>Seu IMC é: {resultado}</h3>
            {mensagem && <p>Sua Classificação: {mensagem}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;