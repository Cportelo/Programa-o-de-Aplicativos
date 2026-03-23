function somar(a, b){
    return a + b;
}
function subtrair(a, b){ // Corrigido de 'subitrair' para 'subtrair'
    return a - b;
}
function dividir(a, b){
    return a / b;
}
function multiplicar(a, b){
    return a * b;
}

// Alterando os nomes das constantes para combinar com os console.logs 
// e evitar conflito com os nomes das funções
const soma = somar(2, 3);
const subtracao = subtrair(2, 3);
const divisao = dividir(2, 3); // Nome alterado de 'dividir' para 'divisao'
const multiplicacao = multiplicar(2, 3); // Adicionada a letra 'i' que faltava

// Ajustando para que os nomes sejam exatamente iguais aos das constantes criadas acima
console.log("soma:", soma); // 's' minúsculo
console.log("subtração:", subtracao);
console.log("divisão:", divisao); 
console.log("multiplicação:", multiplicacao);