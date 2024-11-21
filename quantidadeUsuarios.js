import { getCSS, tickConfig } from "./common.js";

async function quantidadeVeiculosPorFabricante() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-veiculos.json';
    const res = await fetch(url);
    const dados = await res.json();
    const fabricantes = Object.keys(dados);
    const quantidadeDeVeiculos = Object.values(dados);

    const data = [
        {
            x: fabricantes,
            y: quantidadeDeVeiculos,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Fabricantes com mais veículos no mercado',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Fabricantes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Milhões de veículos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadeVeiculosPorFabricante();