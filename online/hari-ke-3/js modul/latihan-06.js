let pertama = "saya"
let kedua = "senang"
let ketiga = "belajar"
let keempat = "javascript"

pertama = (pertama[0].toUpperCase()) + (pertama.substring(1));
kedua = (kedua[0].toUpperCase()) + (kedua.substring(1,((kedua.length)-1))) + (kedua[(kedua.length-1)].toUpperCase());
ketiga = (ketiga[0].toUpperCase()) + (ketiga.substring(1,((ketiga.length)-1))) + (ketiga[(ketiga.length-1)].toUpperCase());
keempat = keempat.toUpperCase();

//output : Saya SenanG BelajaR JAVASCRIPT
console.log(`${pertama} ${kedua} ${ketiga} ${keempat}`)
