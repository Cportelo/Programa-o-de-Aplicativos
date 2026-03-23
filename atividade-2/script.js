function verificarAlistamento() {
    const idadeInput = document.getElementById('idadeRecruta').value;
    const jato = document.getElementById('jato');
    const mecanico = document.getElementById('mecanico');
    const fumaca = document.getElementById('fumaca');
    const resultado = document.getElementById('resultado-missao');

    if (!idadeInput) {
        resultado.innerHTML = "⚠️ INFORME A IDADE!";
        resultado.style.color = "#ff4c4c";
        return;
    }

    const idade = parseInt(idadeInput);

    // Resetando estados e animações
    jato.className = '';
    mecanico.className = '';
    fumaca.className = '';
    void jato.offsetWidth; // Força o browser a resetar o ciclo de animação

    if (idade < 18) {
        // Abaixo da idade: Caça treme e falha
        jato.classList.add('animar-jato-tremer');
        fumaca.classList.add('animar-fumaca');
        resultado.innerHTML = "❌ STATUS: RECRUTA MUITO JOVEM.<br>Aguarde o tempo de alistamento.";
        resultado.style.color = "#ff4c4c";

    } else if (idade === 18) {
        // Exatamente 18: Decolagem autorizada
        jato.classList.add('animar-decolagem');
        resultado.innerHTML = "✅ STATUS: APTO PARA O SERVIÇO!<br>Decolagem autorizada, soldado.";
        resultado.style.color = "#00ff00";

    } else {
        // Acima de 18: Removido pelo mecânico
        jato.classList.add('animar-jato-rebocado');
        mecanico.classList.add('animar-mecanico');
        resultado.innerHTML = "🛑 STATUS: DISPENSADO.<br>Recolhendo aeronave para o hangar.";
        resultado.style.color = "#f0e68c";
    }
}