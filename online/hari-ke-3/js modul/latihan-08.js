let sisi= " 1 2 ";
let jariJari= "7.5";

sisi = Number(sisi.replaceAll(" ", ""));
console.log("Sisi = " + sisi);
console.log("Luas Persegi = " + sisi**2 );

jariJari = parseFloat(jariJari);
console.log("Jari-Jari = " + jariJari);
console.log("Luas Lingkaran = " + 3.14 * jariJari ** 2 );