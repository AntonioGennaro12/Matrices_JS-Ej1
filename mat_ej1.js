// Ejerco 1 matrices con char
/*
const CODIGO_A_MIN  = 97;
const CODIGO_Z_MIN  = 122;
const matrizChar    = [];
let charActual  = CODIGO_A_MIN;

for (let i=0; i < 6; i++) {
    matrizChar.push([]);
    for (let j=0; j < 5;j++) {
        matrizChar[i].push(String.fromCharCode(charActual));
        charActual++;
        if (charActual > CODIGO_Z_MIN ) {
            j=6;
        }
    }
}

console.table(matrizChar);
*/
// Ejercicio 2 matrices con números

const MAX_ELEM      = 200;
const NRO_COLUMNAS  = 10;
const NRO_FILAS     = Math.ceil(MAX_ELEM / NRO_COLUMNAS);

const matrizNum     = [];
let   numero        = 1;

for (let i=0; i < NRO_FILAS; i++) {
    matrizNum.push([]);
    for (let j=0; j < NRO_COLUMNAS;j++) {
        matrizNum[i].push(numero);
        numero++;
        if (numero > MAX_ELEM ) {
            j=NRO_COLUMNAS;
        }
    }
}

console.table(matrizNum);

