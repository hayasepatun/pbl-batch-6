const sayuran=[]
sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge");
sayuran.sort();

console.log("Menggunakan for loop :");
for(let i=0; i<sayuran.length; i++){
  console.log(i+1 +". "+ sayuran[i]);
}

console.log("Menggunakan for...of loop :");
// for of tanpa angka
for(let item of sayuran){
  console.log(item);
}
// for of dengan angka
for (const [index, item] of sayuran.entries()){
  console.log(`${index + 1}. ${item}`);
}

console.log("Menggunakan foreach :");
// foreach dengan angka
sayuran.forEach(function(item,index){
  console.log(`${index + 1}. ${item}`);
});
// foreach tanpa angka
sayuran.forEach(item => console.log(item));
