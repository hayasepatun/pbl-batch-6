let sentence = "Fullstack Developer";
let panjang = sentence.length;
let hasil = "";

console.log("Kalimat : "+sentence);
for(let i=0;i<panjang;i++){
  if(sentence[i]!="a" && sentence[i]!="i" && sentence[i]!="u" && sentence[i]!="e" && sentence[i]!="o" && sentence[i]!="A" && sentence[i]!="I" && sentence[i]!="U" && sentence[i]!="E" && sentence[i]!="O"){
    hasil += sentence[i];
  }
}
console.log("Hasil : "+hasil);
