let transacoes = []
const dados = document.getElementById("dados") //.getElementById(): Retorna uma referência a um objeto com o valor especificado de um atributo ID
const cardEntradas = document.getElementById("entradas")
const cardSaidas = document.getElementById("saidas")
const cardSaldo = document.getElementById("saldo")
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
        data:new Date().toLocaleDateString('pt-br'), //toLocaleDateString(): Converte a data atual para string
        desc,
        tipo,
        valor
    }

    console.log(transacao)

    transacoes.push(transacao)

    dados.innerHTML = `${transacoes.map((item, index) => (
        `<tr key=${index}>
            <td class="px-6 py-4 whitespace-nowrap text-center">${item.desc}</td>
            <td class="px-6 py-4 whitespace-nowrap text-center">${item.data}</td>
            <td class="${item.tipo === 'Entrada' ? "text-blue-500 font-bold " : "text-red-500 font-bold "}px-6 py-4 whitespace-nowrap text-center">${item.tipo}</td>
            <td class="px-6 py-4 whitespace-nowrap text-center">${item.valor}</td>
        </tr>
            `
    )
    ).join("")}`

    renderizarTabela()
}

function calcularTotais(){
    const entradas = transacoes.filter((transacao)=>(
        transacao.tipo === "Entrada"
    )).reduce((acumulador, transacao) => (acumulador + transacao.valor ), 0)
    const saidas = transacoes.filter((transacao)=>(
        transacao.tipo === "Saída"
    )).reduce((acumulador, transacao) => (acumulador + transacao.valor ), 0)
    const saldo = entradas - saidas
    console.log(saldo)

    cardSaldo.textContent = `R$ ${saldo.toFixed(2)}`
    cardEntradas.textContent = `R$ ${entradas.toFixed(2)}`
    cardSaidas.textContent = `R$ ${saidas.toFixed(2)}`
    console.log('entradas:', entradas)
    console.log('saidas:', saidas)
}