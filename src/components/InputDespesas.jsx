import { useState } from "react"

const InputDespesas = ({onAdicionar}) => {
    const [nomeDespesa, setNomeDespesa] = useState("")
    const [valorDespesa, setValorDespesa] = useState("")
    const [categoria, setCategoria] = useState("Indefinido")

    const registarClick = (e) => {
        e.preventDefault() // para a pagina nao dar refresh ao submeter
        
        onAdicionar(nomeDespesa, valorDespesa, categoria)

        setNomeDespesa("")
        setValorDespesa("")
        setCategoria("Indefinido")
    }
    

    return(
        <div>
            <form onSubmit={registarClick} class="form-despesas">
                <div class="input">
                    <label htmlFor="despesa-input">Nome da Despesa: </label>
                    <input type="text" required placeholder="Insira no que gastou ..." id="despesa-input" value={nomeDespesa} onChange={event => setNomeDespesa(event.target.value)}/>
                </div>

                <div class="input">
                    <label htmlFor="valor-input">Valor: </label>
                    <input type="number" step="0.01" required placeholder="Valor (€)" id="valor-input" min="0" value={valorDespesa} onChange={event => setValorDespesa(event.target.value)}></input>
                </div>
                
                
                <div class="input">
                    <label htmlFor="categoria-input">Categoria: </label>
                    <select id="categoria-input" value={categoria} onChange={event => setCategoria(event.target.value)}>
                        <option value="Indefinido" defaultChecked>Indefinido</option>
                        <option value="Alimentação">Alimentação</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Ensino">Ensino</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>

                <button class="button" id="input-btn" type="submit">Registar Despesa</button>
            </form>
        </div>
    )
}



export default InputDespesas