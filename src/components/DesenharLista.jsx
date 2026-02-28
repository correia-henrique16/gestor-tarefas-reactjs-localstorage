const DesenharLista = ({lista, onRemover, onRemoverTodas}) => {

    const listaDesenhada = (id, despesa) => {
        const {nome ,valor, categoria, data} = despesa

        return(
            <li key={id}>
                <p>Despesa: {nome}</p>
                <p>Valor: {parseFloat(valor).toFixed(2)}€</p>
                <p>Categoria: {categoria}</p>
                <p>Data: {data}</p>
                <button onClick={() => onRemover(id)}>Apagar Despesa</button>
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
                <p>Total: {calcularTotal(lista)}€</p>
                <button onClick={() => onRemoverTodas()}>Apagar todas</button>
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