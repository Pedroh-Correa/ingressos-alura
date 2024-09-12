//resgatar os dados

function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;
    
    if(tipoIngresso == "pista"){
        comprarPista(quantidade);
    }
    else{
        if(tipoIngresso == "superior"){
            comprarSuperior(quantidade);

        }
        else{
            comprarInferior(quantidade);
        }
    }
}

function comprarPista(qntd){
    let quantidadePista = document.getElementById("qtd-pista");

    if(qntd>quantidadePista.textContent){
        alert("Quantidade Indisponível");
    }
    else{
        quantidadePista.innerHTML = quantidadePista.textContent -= qntd;
        alert("Compra realizada com sucesso!")
    }

}
function comprarInferior(qntd){
    let quantidadeInferior = document.getElementById("qtd-inferior");

    if(qntd>quantidadeInferior.textContent){
        alert("Quantidade Indisponível");
    }
    else{
        quantidadeInferior.innerHTML = quantidadeInferior.textContent -= qntd;
        alert("Compra realizada com sucesso!")
    }

}
function comprarSuperior(qntd){
    let quantidadeSuperior = document.getElementById("qtd-superior");

    if(qntd>quantidadeSuperior.textContent){
        alert("Quantidade Indisponível");
    }
    else{
        quantidadeSuperior.innerHTML = quantidadeSuperior.textContent -= qntd;
        alert("Compra realizada com sucesso!")
    }

}