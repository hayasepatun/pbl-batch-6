let word="car";
const hasil=[];
for(let i=0; i<word.length; i++){
  console.log(`Perulangan ke ${i+1} ( i = ${i} ) =============== `);
  for(let j=i; j<word.length; j++){
    hasil.push(word.substring(i, j+1)); 
    console.log(`j = ${j} `);
    console.log(`substring(${i},${(j+1)})`);
    console.log(`Menghasilkan : ${word.substring(i, j+1)}`);
  }
}
console.log(hasil);