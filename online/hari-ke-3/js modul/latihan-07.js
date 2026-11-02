let panjang= "12";
let lebar = "7";
let alas = "6";
let tinggi = "13";

//ubah variabel ke integer
panjang = Number(panjang);
lebar = Number(lebar);
alas = Number(alas);
tinggi = Number(tinggi);

//hitung luas persegi panjang
let luas_persegi_panjang = panjang * lebar;
console.log("Luas persegi panjang = " + luas_persegi_panjang);

//hitung luas segi tiga
let luas_segi_tiga = (alas * tinggi)/2;
console.log("Luas segi tiga = " + luas_segi_tiga);