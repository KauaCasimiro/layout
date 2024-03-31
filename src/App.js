import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './service/api';

function App() {
  const [input, setInput] = useState('');
  const [dados, setDados] = useState({});
  const [erro, setErro] = useState('');
  const [operation, setOperation] = useState('Sua Operação Aqui!');

  

  async function handleSearch(endpoint) {
    try {
      const response = await api.get(`/${endpoint}`);
      setDados(response.data);
      setErro('');
      setInput('');
      updateOperation(endpoint);
    } catch (error) {
      setErro(`Erro ao carregar dados de ${endpoint}: ${error.message}`);
      setInput('');
    }
  }

  function updateOperation(endpoint) {
    switch (endpoint) {
      case 'desempenho':
        setOperation('Desempenho Mensal');
        break;
      case 'lucros-mensais':
        setOperation('Lucros Mensais');
        break;
      case 'gastos-mensais':
        setOperation('Gastos Mensais');
        break;
      case 'dados-gerais':
        setOperation('Dados Gerais');
        break;
      default:
        setOperation('Sua operação aqui');
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' && input.trim() !== '') {
      handleSearch(input.trim());
    }
  }

  return (
    <div className="container">
      <h1 className="title">Gestão Financeira</h1>
      <ul>
        <li className="list">dados-gerais</li>
        <li className="list">lucros-mensais</li>
        <li className="list">gastos-mensais</li>
        <li className="list">desempenho</li>
      </ul>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite a operação"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button className="buttonSearch" onClick={() => handleSearch(input.trim())}>
          <FiSearch size={25} color="FFF" />
        </button>
      </div>

      {erro && <p className="error">{erro}</p>}

      <main className="main">
        <h2>{operation}</h2>
        <div className="dataDisplay">
          <pre>
            {JSON.stringify(dados, null, 4)}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
