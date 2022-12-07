
console.log("Funções que tiverem exportes vão estar disponíveis para serem importadas por outros módulos");

export function somatorio (valor1, valor2) {
    return valor1 + valor2;
}

export function produtorio (valor1, valor2) {
    return valor1 * valor2;
}

function exponencial(base, expoente) {
    return base ** expoente;
}

export function arredondar (valor, casa_decimais) {
    let multiplicador = exponencial(10, casa_decimais || 0);
    return Math.round(valor * multiplicador)/ multiplicador;
}

// outra maneira de exportar as funções
export {exponencial};
