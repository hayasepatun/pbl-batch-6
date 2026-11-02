for(let i=1;i<=20;i++){
  if(i%3==0 && i%2!=0){
    // kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
    console.log(i+" - I Love Coding");
  }else if(i%3==0 && i%2==0){
    // kelipatan 3 DAN angka genap maka tampilkan ToT
    console.log(i+" - ToT");
  }else if(i%2!=0){
    // ganjil maka tampilkan Santai 
    console.log(i+" - Santai");
  }else{
    // genap maka tampilkan Berkualitas
    console.log(i+" - Berkualitas");
  }
}