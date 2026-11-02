let tinggi = 7;
let hasil = "";

for(let i=0;i<tinggi;i++){
        for(let j=0;j<=i;j++){
          //perulangan untuk membuat karakter #
          hasil = hasil + "#";
        }
    //perulangan untuk membuat baris baru
    hasil = hasil + "\n";
}

console.log(hasil);
