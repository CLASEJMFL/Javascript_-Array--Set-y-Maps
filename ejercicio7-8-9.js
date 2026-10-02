// 7. Crea un mapa que asocie el número del mes a su nombre
const meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
  console.log(meses.get(5)); // Mayo
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(meses);
