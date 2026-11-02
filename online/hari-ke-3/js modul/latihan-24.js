const angka = [2,3,1,9,12,8,9,7];
function angkaMaxMin(array){
  //... adalah spread operator, untuk mengubah array [2, 5, 8] menjadi 2, 5, 8
  const max = Math.max(...array);
  const min = Math.min(...array);
  return `Angka terbesar adalah ${max} dan angka terkecil adalah ${min}`;
}
console.log(angkaMaxMin(angka));