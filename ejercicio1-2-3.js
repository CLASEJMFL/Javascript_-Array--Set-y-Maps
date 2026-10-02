// 1. Crea un array que almacene cinco animales.
let arrAnimales = ["GATO","PERRO(SANXE)","TIGRE","LEON","OVEJA"]; 
console.log(arrAnimales);

// 2. Añade dos más. Uno al principio y otro al final
arrAnimales.unshift("PANDA");
arrAnimales.push("CABRA");
console.log(arrAnimales);

// 3. Elimina el que se encuentra en tercera posición
arrAnimales.splice(3,1);
console.log(arrAnimales);
