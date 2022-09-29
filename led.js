var select1 = document.querySelector("#tl")
var select2 = document.querySelector("#tf")
var select3 = document.querySelector("#corr")
const saida = document.querySelector("h3")
var botao = document.querySelector("#calc")
var led 

botao.addEventListener("click", (e) => {

    var tl = select1.value
    var tf = select2.value
    var corr = select3.value

 led = (tf-tl)/corr
 saida.innerText = `Valor do resistor ${led}Ω`
    e.preventDefault()
})