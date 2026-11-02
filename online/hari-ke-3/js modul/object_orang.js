// 1. Object Literal
// Object Literal adalah sebuah object yang dibuat dengan cara menuliskan langsung nilai dari properti dan method pada object tersebut.
// digunakan jika akan membuat satu object saja, tidak efisien jika akan membuat banyak object karena harus menuliskan ulang properti dan method yang sama pada setiap object yang dibuat.
console.log("=== Object Literal ===")
const orang = {
    nama : "Okti",
    energi : 70,
    makan : function(porsi){
        this.energi += porsi * 5;
        console.log(`Selamat makan ${this.nama}, energi kamu bertambah menjadi ${this.energi}`);
    },
    kerja : function(jam){
        this.energi -= jam * 3;
        console.log(`Selamat bekerja ${this.nama}, energi kamu berkurang menjadi ${this.energi}`);
    }
}
console.log(`Energi kamu saat ini adalah : ${orang.energi}  `);
orang.makan(3);
orang.kerja(2);

// 2. Function Declaration
// Function Declaration adalah sebuah function yang digunakan untuk membuat object dengan cara mendeklarasikan sebuah function yang akan mengembalikan sebuah object.
console.log("=== Function Declaration ===");
// function dibuat sekali saja
function buatOrang(nama, energi){
    const orang = {};
    orang.nama = nama;
    orang.energi = energi;
    orang.makan = function(porsi){
        this.energi += porsi * 5;
        console.log(`Selamat makan ${this.nama}, energi kamu bertambah menjadi ${this.energi}`);
    };
    orang.kerja = function(jam){
        this.energi -= jam * 3;
        console.log(`Selamat bekerja ${this.nama}, energi kamu berkurang menjadi ${this.energi}`);
    }; 
    return orang;
}
// membuat object dengan memanggil function buatOrang
let okti = buatOrang("Okti", 70);
let andi = buatOrang("Andi", 80);
// memanggil method pada object yang dibuat
okti.makan(1);
andi.kerja(3);

// 3. Constructor Function
// Constructor Function adalah sebuah function yang digunakan untuk membuat object dengan menggunakan keyword new.
console.log("=== Constructor Function ===");
function Orang(nama, energi){
    //tidak ada deklarasi variabel karena kita akan menggunakan this untuk membuat properti pada object yang akan dibuat
    // tidak perlu return karena secara otomatis akan mengembalikan object yang dibuat dengan keyword new
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi += porsi * 5;
        console.log(`Selamat makan ${this.nama}, energi kamu bertambah menjadi ${this.energi}`);
    };
    this.kerja = function(jam){
        this.energi -= jam * 3;
        console.log(`Selamat bekerja ${this.nama}, energi kamu berkurang menjadi ${this.energi}`);
    }; 
}

let ria = new Orang("Ria", 50);   // keyword new digunakan untuk membuat object baru dari constructor
ria.makan(2);
ria.kerja(4);

// Orang.prototype.makan = function(porsi){
//     this.energi += porsi * 5;
//     console.log(`Selamat makan ${this.nama}, energi kamu bertambah menjadi ${this.energi}`);
// };