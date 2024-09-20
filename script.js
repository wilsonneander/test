//Técnica:

//1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
//ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(num) {
    let a = 0, b = 1, next;

    // Caso o número seja 0 ou 1, já faz parte da sequência
    if (num === 0 || num === 1) {
        return true;
    }

    // Gerando os números da sequência de Fibonacci até passar o número informado
    while (b < num) {
        next = a + b;
        a = b;
        b = next;
    }

    // Verifica se o número informado é igual a algum número da sequência
    return b === num;
}

// Função para exibir o resultado
function checkFibonacci(num) {
    if (isFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

// Testando a função com um número
const number = 13;  // Aqui você pode alterar o número para testar
checkFibonacci(number);


//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
function verificarLetraA(str) {
    // Inicializa o contador de ocorrências
    let contador = 0;

    // Converte a string para minúsculas para verificar de forma case-insensitive
    const lowerStr = str.toLowerCase();

    // Percorre cada caractere da string
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            contador++;  // Incrementa o contador se encontrar a letra 'a'
        }
    }

    // Exibe a mensagem sobre a existência e a quantidade de ocorrências
    if (contador > 0) {
        console.log(`A letra 'a' aparece ${contador} vez(es) na string.`);
    } else {
        console.log(`A letra 'a' não foi encontrada na string.`);
    }
}

// Exemplo de uso: você pode alterar essa string para testar
const texto = "Aprendizado é a chave para a evolução.";
verificarLetraA(texto);


//IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

//3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

//Explicação:
//Iniciamos com INDICE = 12, SOMA = 0 e K = 1.
//O loop while vai continuar até que K seja menor que INDICE.
//A cada iteração, o valor de K é incrementado em 1, e o novo valor de K é adicionado a SOMA.
//Ao final, o valor de SOMA é impresso no console.
//Resultado final:
//Ao final do processamento, o valor de SOMA será 77, conforme explicado na análise anterior.

//Ao final do processamento, qual será o valor da variável SOMA?

//4) Descubra a lógica e complete o próximo elemento:
//a) 1, 3, 5, 7, ___ RESPOSTA a) 1, 3, 5, 7, 9 - Lógica: É uma sequência de números ímpares consecutivos.

//b) 2, 4, 8, 16, 32, 64, ____ RESPOSTA b) 2, 4, 8, 16, 32, 64, 128 Lógica: Cada número é o dobro do anterior.

//c) 0, 1, 4, 9, 16, 25, 36, ____  RESPOSTA c) 0, 1, 4, 9, 16, 25, 36, 49 Lógica: Estes são os quadrados perfeitos (0², 1², 2², 3², ...).

//d) 4, 16, 36, 64, ____  RESPOSTA d) 4, 16, 36, 64, 100 Lógica: Estes são os quadrados de números pares (2², 4², 6², 8², ...).

//e) 1, 1, 2, 3, 5, 8, ____  RESPOSTA e) 1, 1, 2, 3, 5, 8, 13 Lógica: Sequência de Fibonacci, onde cada número é a soma dos dois anteriores

//f) 2,10, 12, 16, 17, 18, 19, ____  RESPOSTA f) 2, 10, 12, 16, 17, 18, 19, 20 Lógica: A sequência alterna entre números que aumentam de forma regular e números consecutivos.

//5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. 
//Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. 
//Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
//Ligue o primeiro interruptor e deixe-o ligado por alguns minutos.
//1- Desligue o primeiro interruptor e ligue o segundo interruptor. Deixe o segundo interruptor ligado e não mexa no terceiro interruptor.
//2- Vá até a sala das lâmpadas.
//3- Ao chegar, você terá três cenários:

//1-A lâmpada que está acesa: Ela está conectada ao segundo interruptor, que você deixou ligado.
//2- A lâmpada que está apagada, mas quente ao toque: Ela está conectada ao primeiro interruptor, que você ligou por alguns minutos e depois desligou. O calor indica que ela estava acesa recentemente.
//3-A lâmpada que está apagada e fria: Ela está conectada ao terceiro interruptor, que você não mexeu.
//Com isso, você consegue associar cada interruptor à sua lâmpada correspondente usando apenas uma ida até a sala das lâmpadas.Ligue o primeiro interruptor e deixe-o ligado por alguns minutos.
//Desligue o primeiro interruptor e ligue o segundo interruptor. Deixe o segundo interruptor ligado e não mexa no terceiro interruptor.
