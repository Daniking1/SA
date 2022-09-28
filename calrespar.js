const calculo = document.getElementById("somar")
const saida = document.querySelector("h3")

const resistor1 = document.getElementById("res1")
const resistor2 = document.getElementById("res2")


calculo.addEventListener("click", (e) => {
  const res1 = Number(resistor1.value)
  const res2 = Number(resistor2.value)
  const calculo =  (res1 * res2)/(res1+res2)
  saida.innerText = `A associação de resistores em paralela ${res1}Ω e ${res2}Ω é de: ${calculo}Ω`
  e.preventDefault()

}

)