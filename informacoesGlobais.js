const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-automotivos.json';

async function visualizarInformacoesAutomotivas() {
    const res = await fetch(url);
    const dados = await res.json();

    // Dados baseados no tema automotivo
    const totalVeiculos = (dados.total_veiculos / 1e9).toFixed(2); // Convertendo para bilhões
    const totalPessoas = (dados.total_pessoas / 1e9).toFixed(2); // Convertendo para bilhões
    const veiculosPorPessoa = (dados.total_veiculos / dados.total_pessoas).toFixed(2); // Proporção
    const tempoMedioUsoDiario = parseFloat(dados.tempo_medio_uso_diario).toFixed(1); // Em horas

    // Criando o parágrafo com as informações
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `
        Sabia que atualmente existem cerca de <span>${totalVeiculos} bilhões</span> de veículos no mundo, enquanto a população global é de <span>${totalPessoas} bilhões</span>? 
        Isso significa que há aproximadamente <span>${veiculosPorPessoa} veículos</span> para cada pessoa no planeta.<br>
        Além disso, em média, as pessoas passam cerca de <span>${tempoMedioUsoDiario} horas</span> por dia utilizando seus veículos.
    `;

    // Inserindo o parágrafo no container
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesAutomotivas();
