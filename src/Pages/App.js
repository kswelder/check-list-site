import { React, useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
  const [lista, setLista] = useState([])
  
  async function getLista() {
    const response = await fetch("http://localhost:8081/list").then(data => {return data.json()}).catch(error => {return "<p>Erro</p>"})
    return response
  }
  useEffect(() => {
    let resposta = getLista()

    if (resposta !== null) {
      setLista(resposta)
    }
  })

  return (
    <div className="App">
      <p>App<br/>{lista}</p>
    </div>
  );
}

export default App;
