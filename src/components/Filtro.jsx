const Filtro = ({filtro, setFiltro}) => {
    return(
        <div id="div-filtro">
            <label htmlFor="filtro-input">Filtrar por: </label>
            <select id="filtro-input" value={filtro} onChange={event => {setFiltro(event.target.value)}}>
                <option value="Nenhum" defaultChecked>Nenhum</option>
                <option value="Indefinido">Indefinido</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Ensino">Ensino</option>
                <option value="Saúde">Saúde</option>
                <option value="Outros">Outros</option>
             </select>
        </div>
        
    )    
}

export default Filtro