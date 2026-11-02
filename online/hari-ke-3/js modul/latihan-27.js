function cekPermutasi(str1, str2) {
  // cek string panjangnya harus sama
  if (str1.length !== str2.length) {
    return false;
  }else{
  // kalo sama baru proses
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');
  //cek apakah hasil string 1 sama dg string 2
  return sortedStr1 === sortedStr2;
  }
}
// TEST CASES
console.log(cekPermutasi("taco", "taca")) // false
//console.log(cekPermutasi("abah", "baha")) // true
//console.log(cekPermutasi("ondel", "delon")) // true
//console.log(cekPermutasi("paul sernine", "arsene lupin")) // true
