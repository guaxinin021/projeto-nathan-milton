const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(variavel);
};

// Configuração dos ticks, ajustada para tema automotivo
const tickConfig = {
    family: getCSS('--font'), // Fonte personalizada
    size: 16, // Tamanho do texto nos eixos
    color: getCSS('--highlight-color') // Usando uma cor de destaque automotiva
};

export { getCSS, tickConfig };