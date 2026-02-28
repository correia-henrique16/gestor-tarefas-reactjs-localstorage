import { useEffect, useState } from 'react'

const useDespesas = () => {
    
    // buscar a lista guardada no localStorage quando a pagina é carregada
    const [listaDespesas, setListaDespesas] = useState(() => {
        const dados = localStorage.getItem('listaDespesas')
        return  dados ? JSON.parse(dados) : []
    })

    // guardar no localStorage sempre que se altera a listaDespesas
    useEffect(() => {
        localStorage.setItem('listaDespesas', JSON.stringify(listaDespesas))
    }, [listaDespesas])


    const adicionarDespesa = (nomeDespesa, valorDespesa, categoria) => {
        const now = new Date
        const dataDespesa = (`${now.getDate()}-${(now.getMonth())+1}-${now.getFullYear()}`)
        const novaDespesa = {
            id: self.crypto.randomUUID(),
            nome: nomeDespesa,
            valor: valorDespesa,
            categoria: categoria,
            data: dataDespesa
        }

        setListaDespesas([...listaDespesas, novaDespesa])
    }


    const removerDespesa = (idDespesa) => {
        const listaAtualizada = listaDespesas.filter(despesa => despesa.id !== idDespesa)
        setListaDespesas(listaAtualizada)
    }

    
    const removerTodas = () => {
        setListaDespesas([])
    }




    return {
        listaDespesas,
        adicionarDespesa,
        removerDespesa,
        removerTodas,
    }
}

export default useDespesas