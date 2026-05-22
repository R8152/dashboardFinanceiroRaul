function adicionarTransacao(event){
    event.preventDefault()
    const desc = document.getElementById("desc").value
    const valor = parseFloat(document.getElementById("valor").value)
    const tipo = document.getElementById("tipo").value

    console.log(desc)
    console.log(valor)
    console.log(tipo)
}