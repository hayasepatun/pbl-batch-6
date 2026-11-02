const data = [
 [1,3,5,7,8,9],
 [4,5,6,2,3,1],
 [6,7,8,1,3,5],
];
const hasil = [];
for (const i of data) {
  let jumlah = 0;
  for (const j of i) {
    jumlah += j;
  }
  hasil.push(jumlah);
}
console.log(hasil);