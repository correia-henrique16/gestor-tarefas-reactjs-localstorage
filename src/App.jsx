
import './App.css'
import { useState } from 'react'
import InputDespesas from './components/InputDespesas'
import DesenharLista from "./components/DesenharLista"
import Filtro from "./components/Filtro"
import useDespesas from './hooks/useDespesas'

function App() {
  //pegar os hooks da o ficheiro para o App.jsx ficar mais clean
  const {listaDespesas, adicionarDespesa, removerDespesa, removerTodas} = useDespesas()

  const [filtro, setFiltro] = useState('Nenhum')

  const listaFiltrada = listaDespesas.filter(despesa => {
    if (filtro == "Nenhum") {
      return true
    } else {
      return despesa.categoria == filtro
    }
  })


  return(
    <div>
      <h1>Gestor de Despesas</h1>

      <InputDespesas onAdicionar={adicionarDespesa}/>

      <Filtro filtro={filtro} setFiltro={setFiltro}/>

      <DesenharLista lista={listaFiltrada} onRemover={removerDespesa} onRemoverTodas={removerTodas}/>
    </div>
  )
}

export default App
