let inOut: number = 0;

do{
    const teclado = require (`prompt-sync`)();

    console.log(`Qual operação deseja? Digite: `);
    console.log(`+ --> Adição`);
    console.log(`- --> Subtração`);
    console.log(`* --> Multiplicação`);
    console.log(`/ --> Divisão`);

    let opcao = teclado(`digite a opção desejada: `);

    //console.clear

    let numeroUm: number = 0;
    let numeroDois: number = 0;
    let resultado: number = 0;

    if(opcao == `+`){
        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm + numeroDois;
        console.log(`O valor da soma de ${numeroUm} com ${numeroDois} `);
        console.log(`é ${resultado}`);
    }
    else if(opcao == `-`){
        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm - numeroDois;
        console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} `);
        console.log(`é ${resultado}`);
    }
    else if(opcao == `*`){
        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm * numeroDois;
        console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} `);
        console.log(`é ${resultado}`);
    }
    else if(opcao == `/`){
        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm / numeroDois;
        console.log(`O valor da divisão de ${numeroUm} com ${numeroDois} `);
        console.log(`é ${resultado}`);
    }
    else{
        console.log(`Algo deu errado!!`);
    }

    console.clear();

    console.log(`Para continuar digite`);
    console.log(`0 - Sair`);
    console.log(`1 - continuar`);
    inOut = parseInt(teclado(`Digite a opção: `));

} while (inOut != 0);

console.log(`Fim do programa...`);
