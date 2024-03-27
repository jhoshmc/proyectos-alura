console.log("mentalista");
const numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto);
let intentos = 1;
let numeroDijitado;

while (numeroSecreto != numeroDijitado && intentos <= 5) {
  numeroDijitado = prompt("ingrese un numero entre 1 y 1000");

  if (numeroSecreto == numeroDijitado) {
    alert("felicidades , ganaste con solo " + intentos + " intentos");
  } else if (numeroSecreto > numeroDijitado) {
    intentos++;
    alert("el numero secreto es mayor a " + numeroDijitado);
  } else {
    intentos++;
    alert("el numero secreto es menor a " + numeroDijitado);
  }
}

if (intentos > 5) {
  alert("perdiste :c numero de intentos: " + intentos);
}
