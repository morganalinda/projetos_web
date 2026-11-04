
function calcular(event) {
    event.preventDefault();

    let produto = document.getElementById("produto").value;
    let valor = Number(document.getElementById("valor").value);
    let desconto = Number(document.getElementById("desconto").value);

    let valor_desconto = valor * (desconto / 100);
    let valor_final = valor - valor_desconto;

    document.getElementById("resultado1").textContent =
        "Produto: " + produto;

    document.getElementById("resultado2").textContent =
        "Valor: R$ " + valor.toFixed(2);

    document.getElementById("resultado3").textContent =
        "Desconto: R$ " + valor_desconto.toFixed(2);

    document.getElementById("resultado4").textContent =
        "Valor Final: R$ " + valor_final.toFixed(2);
}

function calc_restaurante(){
    event.preventDefault()
    let valor = Number(document.getElementById("valor").value)
    let pessoas = Number(document.getElementById("pessoas").value)
    let percentual = valor * (10 / 100)
    let valor_atual = valor + percentual 
    let conta = valor_atual / pessoas

    document.getElementById("resultado1").innerHTML = 'Valor: ' + valor
    document.getElementById("resultado2").innerHTML = '10% R$ ' + percentual
    document.getElementById("resultado3").innerHTML = 'Valor atual: ' + valor_atual
    document.getElementById("resultado4").innerHTML = 'Valor por pessoa: ' + + conta.toFixed(2)
    

}
