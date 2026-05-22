// function nomedaFuncao (){
//      bloco de execução
//}

//para executar a função precisa chamar

// nomedaFuncao()
// função sem parâmetro e sem retorno

//prompt() => input direto na tela
//alert() => output direto na tela
//confirm() => input
//console.log() => output
//Number() => Conversor em número
//String() => Conversor em texto
//parseInt() => Conversor em inteiro
//parseFloat() => Conversor em número flutuante(com decimal)
//toFixed(2) => Fixa o número de casas decimais
function dizerOi(){
    alert("Boa noite!")
}
dizerOi()
//função com parâmetro
function soma(n1, n2){
    let resultado = n1+n2
    console.log(resultado)
}

soma(10,5) //resultado pode ser visto com Inspecionar e Console

//função com retorno
function subtracao(n1, n2){
    let resultado = n1 - n2
    return resultado
}
//função tipo "arrow function"
//hoisting - função do tipo function que o arquivo consgue identificar a função antes ou depois da declaração
const multiplicacao = (n1, n2) => {
    let resultado = n1*n2
    return resultado
}
console.log(multiplicacao(3,3))

const frutas = ["Banana", "Laranja", "Maçã", "Goiaba"] //array = Lista

frutas.filter((item)=>{
    return item === "Banana"
})