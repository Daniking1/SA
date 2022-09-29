const somar = document.getElementById("somar")
const saida = document.querySelector("h3")
const paral = document.getElementById("paral")
const resistor1 = document.getElementById("res1")
const resistor2 = document.getElementById("res2")


somar.addEventListener("click", (e) => {
    const res1 = Number(resistor1.value)
    const res2 = Number(resistor2.value)
    const soma = res1 + res2
    saida.innerText = `A associação de resistores em série ${res1}Ω e ${res2}Ω é de: ${soma}Ω`
    e.preventDefault()

})
paral.addEventListener("click", (e) => {
    const res1 = Number(resistor1.value)
    const res2 = Number(resistor2.value)
    const para = (res1 * res2) / (res1 + res2)

    saida.innerText = `A associação de resistores em paralelo é ${res1}Ω e ${res2}Ω é de: ${para}Ω`
    e.preventDefault()
})
