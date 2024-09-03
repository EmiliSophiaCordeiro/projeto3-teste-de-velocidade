let vehicle1 = 'Qual o nome do primeiro veículo? '
let speed1 = 'Qual a velocidade do primeiro veículo? '
let vehicle2 = 'Qual a nome de segundo veículo?'
let speed2 = 'Qual a velocidade do segundo veículo?'

if (speed1 === speed2){
  console.log(`Tanto  ${vehicle1} quanto o ${vehicle2} estão na mesma velocidade de ${speed1}km/h`)
} else if (speed1 > speed2) {
  console.log(`O ${vehicle1} está a ${speed1}km/h, e está mais rápido  que o ${vehicle2}, que está a ${speed2}km/h`)
} else {
  console.log(`O ${vehicle2} está a ${speed2}km/h, e está mais rápido que o ${vehicle1}, que está a ${speed1}km/h`)
}