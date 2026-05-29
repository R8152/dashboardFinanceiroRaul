let transacoes = []
const dados = document.getElementById('dados')
const cardEntradas = document.getElementById('entradas')
const cardSaidas = document.getElementById('saidas')
const cardSaldo = document.getElementById('saldo')
function renderizarTabela(){
    if (transacoes.length === 0){
        dados.innerHTML = `
        <tr>
            <td colspan='4' class='text-center py-4 px-6 text-lg border-b'>
            Nenhuma transação foi feita no momento</td>
        </tr>`
    }
    calcularTotais()
}
renderizarTabela()
function adicionarTransacao(event){
    event.preventDefault()
    const desc = document.getElementById("desc").value
    const valor = parseFloat(document.getElementById("valor").value)
    const tipo = document.getElementById("tipo").value
    

    const transacao = {
        data:new Date().toLocaleDateString('pt-br'),
        desc,
        tipo,
        valor,
    }

    console.log(transacao)

    transacoes.push(transacao)

    dados.innerHTML = `${transacoes.map((item, index) => (
        `<tr key=${index}>
            <td class="px-6 py-4 whitespace-nowrap">${item.data}</td>
            <td class="px-6 py-4 whitespace-nowrap">${item.desc}</td>
            <td class="px-6 py-4 whitespace-nowrap">${item.tipo}</td>
            <td class="px-6 py-4 whitespace-nowrap">${item.valor}</td>
        </tr>
            `
    )
    )}`
}

function calcularTotais(){
    const entradas = transacoes.filter((transacao)=>(
        transacao.tipo === "entrada"
    )).reduce((acumulador, transacao) => (acumulador + transacao.valor ), 0)
    const saidas = transacoes.filter((transacao)=>(
        transacao.tipo === "saida"
    )).reduce((acumulador, transacao) => (acumulador + transacao.valor ), 0)
    const saldo = entradas - saidas

    cardSaldo.innerHTML = `R$ ${saldo.toFixed(2)}`
    cardEntradas.innerHTML = `R$ ${entradas.toFixed(2)}`
    cardSaidas.innerHTML = `R$ ${saidas.toFixed(2)}`
    console.log('entradas:', entradas)
    console.log('saidas:', saidas)
}