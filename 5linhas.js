var select1 = document.querySelector("#f1")
var select2 = document.querySelector("#f2")
var select3 = document.querySelector("#f3")
var select4 = document.querySelector("#f4")
var select5 = document.querySelector("#f5")
const saida = document.querySelector("h3")
var botao = document.querySelector("#calc")

botao.addEventListener("click", (e) => {

    var f1 = select1.value
    var f2 = select2.value
    var f3 = select3.value
    var f4 = select4.value
    var f5 = select5.value



    if (f1 === "marrom") { f1 = "1" }
else if (f1 === "vermelho") {f1="2"}
else if (f1 === "laranja") {f1="3"}
else if (f1 === "amarelo") {f1="4"}
else if (f1 === "verde") {f1="5"}
else if (f1 === "azul") {f1="6"}
else if (f1 === "violeta") {f1="7"}
else if (f1 === "cinza") {f1="8"}
else if (f1 === "branco") {f1="9"}


if (f2 === "preto") { f2 = "0" }
else if (f2 === "marrom") { f2 = "1" }
else if (f2=== "vermelho") {f2="2"}
else if (f2 === "laranja") {f2="3"}
else if (f2 === "amarelo") {f2="4"}
else if (f2 === "verde") {f2="5"}
else if (f2 === "azul") {f2="6"}
else if (f2 === "violeta") {f2="7"}
else if (f2 === "cinza") {f2="8"}
else if (f2 === "branco") {f2="9"}

if (f3 === "preto" ){f3="0"}
else if (f3 === "marrom") {f3="1"}
else if (f3 === "vermelho") {f3="2"}
else if (f3 === "laranja") {f3="3"}
else if (f3 === "amarelo") {f3="4"}
else if (f3 === "verde") {f3="5"}
else if (f3 === "azul") {f3="6"}
else if (f3 === "violeta") {f3="7"}
else if (f3 === "cinza") {f3="8"}
else if (f3 === "branco") {f3="9"}

if (f4 === "prata" ){f4=0.01}
else if (f4 === "dourado") {f4=0.1}
else if (f4 === "preto") {f4=1}
else if (f4 === "marrom") {f4=10}
else if (f4 === "vermelho") {f4=100}
else if (f4 === "laranja") {f4=1000}
else if (f4 === "amarelo") {f4=10000}
else if (f4 === "verde") {f4=100000}
else if (f4 === "azul") {f4=1000000}
else if (f4 === "violeta") {f4=10000000}
else if (f4 === "cinza") {f4=100000000}

if (f5 === "prata" ){f5=" mais ou menos 10% "}
else if (f5 === "dourado") {f5=" mais ou menos 5% "}
else if (f5 === "marrom") {f5=" mais ou menos 1% "}
else if (f5=== "vermelho") {f5=" mais ou menos 2% "}
else if (f5 === "verde") {f5=" mais ou menos 0.5% "}
else if (f5 === "azul") {f5=" mais ou menos 0.25% "}
else if (f5 === "violeta") {f5=" mais ou menos 0.1% "}
else if (f5 === "cinza") {f5=" mais ou menos 0.05% "}

r = f1+f2+f3
r = Number(r)
r=r*f4
console.log(`${r}${f5}`)
saida.innerText = `O resistor tem valor de ${r}Ω com ${f5}`
 e.preventDefault()
})