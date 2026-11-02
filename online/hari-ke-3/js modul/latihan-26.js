// function palindrome(str){
//   let arrSplit = str.split('');
//   console.log(arrSplit);
//   let arrReverse = arrSplit.reverse();
//   console.log(arrReverse);
//   let arrJoin = arrReverse.join('');
//   console.log(arrJoin);
//   return str == arrJoin;
// }

function palindrome(str){
  return str == str.split('').reverse().join('');
}

console.log(palindrome("katak"));