/*
comentários são formas de explicar o que acontece nesta seção no caso de agora
estou fazendo atividades da trybe sobre loop for e arrays
0
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1
for(let i = 0; i < numbers.length;++i) {
    console.log(numbers[i]);
};
//exercicio 2
let contador = 0;
for(let i = 0; i < numbers.length ; ++i) {

    contador += numbers[i];

}
console.log(contador);

//exercicio 3

for(let i = 0; i < numbers.length ; ++i) {

    contador += numbers[i];
}
 
console.log(contador / numbers.length);

//exercicio 4
for(let i = 0; i < numbers.length ; ++i) {

    contador += numbers[i];
}
 let contadorIf = contador / numbers.length;
if(contadorIf > 20) {
    console.log("Valor maior que 20");
}
else {
    console.log("Valor menor ou igual a 20");
}

// exercicio 5 descubra o maior numero e o imprima
let maiorValor = 0;

for(let i = 0; i < numbers.length; ++i) {
    if(numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
    console.log(maiorValor);


}

//exercicio 6 descubra os numeros impares


let arrayImpar = []; 
for(let i = 0; i < numbers.length ; ++i) {
    if(numbers[i] % 2 === 1) {
    arrayImpar.push(numbers[i]); }
    
}
    

console.log(arrayImpar);