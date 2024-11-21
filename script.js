// Solicitar ao usuário o nome e a velocidade dos veículos
let vehicle1 = prompt('Qual o nome do primeiro veículo?');
let speed1 = parseInt(prompt('Qual a velocidade do primeiro veículo?'));

let vehicle2 = prompt('Qual o nome do segundo veículo?');
let speed2 = parseInt(prompt('Qual a velocidade do segundo veículo?'));

// Comparar as velocidades e exibir o resultado
if (speed1 === speed2) {
  console.log(`Tanto o ${vehicle1} quanto o ${vehicle2} estão na mesma velocidade de ${speed1} km/h`);
} else if (speed1 > speed2) {
  console.log(`O ${vehicle1} está a ${speed1} km/h, e está mais rápido que o ${vehicle2}, que está a ${speed2} km/h`);
} else {
  console.log(`O ${vehicle2} está a ${speed2} km/h, e está mais rápido que o ${vehicle1}, que está a ${speed1} km/h`);
}
