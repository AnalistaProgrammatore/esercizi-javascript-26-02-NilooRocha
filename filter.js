let vetor1 = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]
let numeroPar = []
for (let i = 0; i < vetor1.length; i++){
    if (vetor1[i] % 2 === 0){
        numeroPar.push(vetor1[i])
    }
}
console.log(numeroPar)
let soma = 0
for(let i = 0; i < numeroPar.length; i++){
    soma += numeroPar[i]
}
console.log(soma)
//
//
//
//
let vetor2 = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]
let numerosParesFiltrados = vetor2.filter(valor => valor % 2 === 0)
console.log(numerosParesFiltrados)
let somaVetor = numerosParesFiltrados.reduce((Acumulador, valorVetor) => Acumulador + valorVetor
, 0)
console.log(somaVetor)