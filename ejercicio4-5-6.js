// 4. Crea un set que almacene cinco libros
let setLibros = new Set(["DON QUIJOTE","100 AÑOS DE SOLEDAD","EL CUARTO DE ATRAS","HISTORIA DE UNA ESCALERA","1948"]);
console.log(setLibros);

// 5. Añade dos más. Uno de ellos repetido
setLibros.add("1948");
setLibros.add("COMO EL MAR");
console.log(setLibros);

// 6. Elimina uno concreto a tu elección
setLibros.delete("100 AÑOS DE SOLEDAD");
console.log(setLibros);
