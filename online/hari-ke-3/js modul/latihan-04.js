let perkenalan = 'Nama saya adalah';
let nama = "Okti" // isi dengan nama kalian
let kata1 = "saya"
let kata2 = "berharap"
let kata3 = "untuk"
let kata4 = "menjadi"
let kata5 = "seorang"
let kata6 = "software"
let kata7 = "engineer"

//menggunakan +
let hasil1 = perkenalan + " " + nama + " " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7
console.log(hasil1)

//menggunakan concat
let hasil2 = perkenalan.concat(" ",nama," ",kata1," ",kata2," ",kata3," ",kata4," ",kata5," ",kata6," ",kata7)
console.log(hasil2)

//menggunakan backtick
let hasil3 = `${perkenalan} ${nama} ${kata1} ${kata2} ${kata3} ${kata4} ${kata5} ${kata6} ${kata7}`
console.log(hasil3)