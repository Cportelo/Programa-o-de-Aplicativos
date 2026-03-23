function calcular() {
    const inputQuantidade = document.getElementById('quantidade');
    const displayResultado = document.getElementById('resultado');
    const bonecoContainer = document.getElementById('boneco-container');
    
    let quantidade = parseInt(inputQuantidade.value);

    // Limpa o conteúdo anterior antes de um novo cálculo
    bonecoContainer.innerHTML = '';
    displayResultado.innerHTML = '';

    if (isNaN(quantidade) || quantidade <= 0) {
        displayResultado.innerHTML = "Por favor, digite um valor válido.";
        displayResultado.style.color = "#ff4d4d"; // Cor de erro (vermelho)
        return;
    }

    let precoUnitario;
    let bonecoHTML = '';

    if (quantidade < 12) {
        precoUnitario = 1.30;
        // Boneco TRISTE (CSS simples ou Emoji)
        bonecoHTML = `
            <div class="face sad">
                <span style="font-size: 50px;">🤑</span>
                <p>Preço unitário: R$ 1,30</p>
            </div>
        `;
    } else {
        precoUnitario = 1.00;
        // Boneco FELIZ
        bonecoHTML = `
            <div class="face happy">
                <span style="font-size: 50px;">😟</span>
                <p>Preço unitário: R$ 1,00</p>
            </div>
        `;
    }

    let valorTotal = quantidade * precoUnitario;
    let totalFormatado = valorTotal.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    // Exibe o resultado final
    displayResultado.style.color = "#fff"; // Cor branca para o vidro
    displayResultado.innerHTML = `<strong>Total: ${totalFormatado}</strong>`;
    bonecoContainer.innerHTML = bonecoHTML;
}