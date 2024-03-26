/**
 ¡Desafíos de esta clase!
Agregar otras monedas para convertir;
Conversor de temperaturas entre fahrenheit, kelvin y celsius;
Agregar en el alert el nombre de la persona que está pidiendo la conversión;
Agregar una línea al proyecto desarrollado para que aparezca el valor en bitcoin.
 */
const PEN_USD = 0.2698;
const MXN_USD = 0.05998;
// const valorEnDolar = 115.5;
// const cotizacionPesosMexicanos = 16.89;
// const cotizacionSolPeruano = 0.27;

function convercionMoneda(cantidad, conversor, usuario = "") {
  let cambio = cantidad * conversor;
  cambio = Number.parseFloat(cambio).toFixed(2);
  return console.log(`estimad@: ${usuario}, su cambio es: ${cambio} USD`);
}

convercionMoneda(150, MXN_USD, "maria");
convercionMoneda(150, PEN_USD, "jose");
convercionMoneda(200, PEN_USD);

/*
°F = °C x 9/5 + 32  celcius a fahrenheit
°K = °C + 273,15  celcius a kelvin
°C = °F-32 x 9/5  fahrenheit a celcius
para convertir °F a °K , primero convietelo a °C y luego a °K
°C = °K - 273.15   keilvin a celcius
°F = °k converit a °C y luego a °F
 */
function conversortemperatura(temperatura, medidaAConvertir, medida) {
  let convertido;
  switch (medidaAConvertir) {
    case "f":
      switch (medida) {
        case "c":
          convertido = temperatura * (9 / 5) + 32;
          break;
        case "k":
          convertido = (temperatura - 273.15) * (9 / 5) + 32;

          break;
        case "f":
          convertido = temperatura;
          break;
        default:
          return console.log("medida no encontrada");
      }
      break;
    case "c":
      switch (medida) {
        case "c":
          convertido = temperatura;
          break;
        case "k":
          convertido = temperatura - 273.15;
          break;
        case "f":
          convertido = temperatura - 32 * (9 / 5);
          break;
        default:
          return console.log("medida no encontrada");
      }
      break;
    case "k":
      switch (medida) {
        case "c":
          convertido = temperatura + 273.15;
          break;
        case "k":
          convertido = temperatura;
          break;
        case "f":
          convertido = temperatura - 32 * (9 / 5) + 273.15;
          break;
        default:
          return console.log("medida no encontrada");
      }
      break;
    default:
      return console.log("medida no encontrada");
  }
  return console.log(
    `${temperatura}°${medida} = ${convertido} °${medidaAConvertir}`
  );
}

conversortemperatura(180, "f", "c");
conversortemperatura(180, "f", "k");
conversortemperatura(180, "f", "f");
console.log("...............................");
conversortemperatura(180, "c", "f");
conversortemperatura(180, "c", "c");
conversortemperatura(180, "c", "k");
console.log("...............................");
conversortemperatura(180, "k", "k");
conversortemperatura(180, "k", "f");
conversortemperatura(180, "k", "c");
