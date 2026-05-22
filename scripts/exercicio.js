function Alunos(){
    const quant = Number(prompt("Digite a quantidade de alunos na sua turma: "))
    const presente = Number(prompt("Digite quantos alunos estiveram presentes na aula de hoje."))
    const faltante = quant - presente
    alert(`Número de alunos que faltaram a aula de hoje: ${faltante}`)
}
Alunos()