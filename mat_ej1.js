// Ejerco 1 matrices con char

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