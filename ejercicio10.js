// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.
const miArray = ['manzana', 'pera', 'manzana', 'platano'];
const miSet = new Set(miArray);
const miMap = new Map();
miMap.set('frutasUnicas', miSet);


console.log(miMap);
