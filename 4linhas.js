var select1 = document.querySelector("#f1")
var select2 = document.querySelector("#f2")
var select3 = document.querySelector("#f3")
var select4 = document.querySelector("#f4")
const saida = document.querySelector("h3")
var botao = document.querySelector("#calc")


botao.addEventListener("click", (e) => {

    var f1 = select1.value
    var f2 = select2.value
    var f3 = select3.value
    var f4 = select4.value




    if (f1 === "marrom") { f1 = "1" }
    else if (f1 === "vermelho") { f1 = "2" }
    else if (f1 === "laranja") { f1 = "3" }
    else if (f1 === "amarelo") { f1 = "4" }
    else if (f1 === "verde") { f1 = "5" }
    else if (f1 === "azul") { f1 = "6" }
    else if (f1 === "violeta") { f1 = "7" }
    else if (f1 === "cinza") { f1 = "8" }
    else if (f1 === "branco") { f1 = "9" }


    if (f2 === "preto") { f2 = "0" }
    else if (f2 === "marrom") { f2 = "1" }
    else if (f2 === "vermelho") { f2 = "2" }
    else if (f2 === "laranja") { f2 = "3" }
    else if (f2 === "amarelo") { f2 = "4" }
    else if (f2 === "verde") { f2 = "5" }
    else if (f2 === "azul") { f2 = "6" }
    else if (f2 === "violeta") { f2 = "7" }
    else if (f2 === "cinza") { f2 = "8" }
    else if (f2 === "branco") { f2 = "9" }


    if (f3 === "prata") { f3 = 0.01 }
    else if (f3 === "dourado") { f3 = 0.1 }
    else if (f3 === "preto") { f3 = 1 }
    else if (f3 === "marrom") { f3 = 10 }
    else if (f3 === "vermelho") { f3 = 100 }
    else if (f3 === "laranja") { f3 = 1000 }
    else if (f3 === "amarelo") { f3 = 10000 }
    else if (f3 === "verde") { f3 = 100000 }
    else if (f3 === "azul") { f3 = 1000000 }
    else if (f3 === "violeta") { f3 = 10000000 }
    else if (f3 === "cinza") { f3 = 100000000 }




    if (f4 === "prata") { f4 = " mais ou menos 10% " }
    else if (f4 === "dourado") { f4 = " mais ou menos 5% " }
    else if (f4 === "marrom") { f4 = " mais ou menos 1% " }
    else if (f4 === "vermelho") { f4 = " mais ou menos 2% " }
    else if (f4 === "verde") { f4 = " mais ou menos 0.5% " }
    else if (f4 === "azul") { f4 = " mais ou menos 0.25% " }
    else if (f4 === "violeta") { f4 = " mais ou menos 0.1% " }
    else if (f4 === "cinza") { f4 = " mais ou menos 0.05% " }


    r = f1 + f2
    r = Number(r)
    r = r * f3
    console.log(`${r}${f4}`)
    saida.innerText = `O resistor tem valor de ${r}Ω com ${f4}`
    e.preventDefault()
})
