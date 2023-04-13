// Manipulação do DOM
var inputQtde = document.querySelector('#qtde')
inputQtde.addEventListener("change", atualizarpersonalizacao)
document.querySelector('#js').addEventListener("change", atualizarpersonalizacao)
document.querySelector('#js1').addEventListener("change", atualizarpersonalizacao)
document.querySelector('#js2').addEventListener("change", atualizarpersonalizacao)
document.querySelector('#layout_sim').addEventListener("change", atualizarpersonalizacao)
document.querySelector('#layout_nao').addEventListener("change", atualizarpersonalizacao)
document.querySelector('#prazo').addEventListener("change", atualizarpersonalizacao)

function atualizarpersonalizacao(){
    let qtde = inputQtde.value 
    let preco = qtde * 15
    
    let js = document.querySelector('#js').checked
    if(js) preco *= 1.1

    let js1 = document.querySelector('#js1').checked
    if(js1) preco *= 1.3

    let js2 = document.querySelector('#js2').checked
    if(js2) preco *= 1.5

    let layout = document.querySelector("#layout_sim").checked
    if(layout) preco *= 1 + (qtde * .1)

    let prazo = document.querySelector("#prazo").value
    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)` //template litereal
    let taxaDeUrgencia = 1 - (prazo * .01);
    preco *= taxaDeUrgencia

    let output = document.querySelector('#secao-personalizacao form output')
    output.innerHTML = "R$ " + preco.toFixed(2)
    console.log(js)
}
