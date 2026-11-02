function karakterUnik(text) {
  let kalimat = text.toLowerCase();
  let hasil = "";
  for (let i = 0; i < text.length; i++) {
    let huruf = kalimat[i];
    //hitung jumlah kemunculan
    let jumlah = (kalimat.split(kalimat[i]).length) - 1;
    //"aku suka roti".split('a')
    // ["", "ku suk", " roti"]
    // length = 3 --> jumlah kemunculan 'a' = 3 - 1 = 2
    if (jumlah == 1) {
      hasil += huruf;
    }
  }
  return hasil;
}
let text = "Super Bootcamp Fullstack Dev 2022";
//let text = "aku suka roti";
console.log(karakterUnik(text));