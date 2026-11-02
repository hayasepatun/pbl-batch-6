function arrangeString(str){
  let arrSplit = str.split('');
  console.log(arrSplit);
  let arrSort = arrSplit.sort();
  console.log(arrSort);
  let hasil = arrSort.join("");
  console.log(hasil);
  return hasil;
}
console.log(arrangeString("bahasa"));
//console.log(arrangeString("BBPVP"));
//console.log(arrangeString("kompeten"));
