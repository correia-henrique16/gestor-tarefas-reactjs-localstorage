const DesenharLista = ({lista, onRemover, onRemoverTodas}) => {

    const listaDesenhada = (id, despesa) => {
        const {nome ,valor, categoria, data} = despesa

        return(
            <li key={id} class="li-despesa">
                <p>Despesa: {nome}</p>
                <p>Valor: {parseFloat(valor).toFixed(2)}€</p>
                <p class="outros-p">Data: {data}</p>
                <p class="outros-p">Categoria: {categoria}</p>
                <button class="button btn-apagar" onClick={() => onRemover(id)}>Apagar Despesa</button>
                <br />
            </li>
        )
    }


    if (lista.length == 0) {
        return(
            <p id="lista-vazia">Nenhuma Despesa!</p>
        )
    } else {
        return(
            <div>
                <div id="total-container">
                    <p id="total-p">Total: </p>
                    <p id="total-valor">{calcularTotal(lista)}€</p>
                </div>
                <div id="btn-container">
                    <button className="button btn-apagar" id="btn-apagar-todas" onClick={() => onRemoverTodas()}>Apagar todas</button>
                </div>
                
                <br />

                <ul id="lista-despesas">
                {
                    lista.map((despesa) => {
                        return listaDesenhada(despesa.id, despesa)
                    })
                }
                </ul>

            </div>
            
        )
    }
}



const calcularTotal = (lista) => {
    let total = 0
    lista.map((despesa) => {
        const valorNum = parseFloat(despesa.valor)
        total += valorNum
    })
    return total.toFixed(2) //toFixed para definir as casas decimais
}

export default DesenharLista