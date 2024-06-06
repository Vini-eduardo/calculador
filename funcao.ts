function saudacao ():void{
    console.log(`Hello World!!`);
}

function soma (n1:number, n2:number):void{
    console.log (n1 + n2);
}

function subtracao (n1: number, n2:number):number{
    return n1 - n2;
}

const teclado = require(`prompt-sync`)();

let numeroUm: number = parseInt(teclado(`digite o primeiro número: `));
let numeroDois: number = parseInt(teclado(`Digite o segundo número`));

saudacao(); //função sem parâmetro e sem retorno

soma(numeroUm, numeroDois); // função com parâmetro e sem retorno

let resultado: number = subtracao(numeroUm, numeroDois);

console.log(`O resultado de ${numeroUm} - ${numeroDois} = ${resultado}`);