import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import './style.css';

function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    alert("Funcionando " + input);
  }

  return (
    <div className="container">
      <h1 className="title">Gestão Financeira</h1>

      <div className="containerInput">
          <input type="text" 
          placeholder="Digite a operação"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />

          <button className="buttonSearch" onClick={handleSearch}>
              <FiSearch size={25} color="FFF"/>
          </button>
      </div>

      <main className="main">
        <h2>CEP: 2222222</h2>

        <span>Rua</span>
        <span>Complemento:</span>
        <span>Vila Rosa</span>
        <span>Campo Grande</span>
      </main>
    </div>
  );
}

export default App;
