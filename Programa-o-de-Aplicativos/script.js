// Criamos o nosso robô chamado "calcular"
function calcular() {
    
    // 1. Pegar os valores que o usuário digitou nas caixas e transformar em Número
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    // 2. Calcular a média (soma as 3 notas e divide por 3)
    let media = (n1 + n2 + n3) / 3;

    // 3. O Juiz entra em ação (Aprovado ou Reprovado?)
    let situacao = "";
    
    if (media < 7) {
        situacao = "REPROVADO ❌";
    } else {
        situacao = "APROVADO ✅";
    }

    // 4. Mostrar o resultado na tela do HTML
    // Usamos o toFixed(1) para deixar a nota com apenas 1 casa decimal (ex: 7.5)
    let texto = "A média do aluno é: " + media.toFixed(1) + " - O aluno está " + situacao;
    
    document.getElementById("resultadoFinal").innerText = texto;
}