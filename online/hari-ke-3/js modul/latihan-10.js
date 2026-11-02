const nilai = 75;

if(nilai<0 || nilai>100 || isNaN(nilai)){
  console.log("Nilai tidak valid");
}else if(nilai<60){
  console.log("Nilai = E");
}else if(nilai<70){
  console.log("Nilai = D");
}else if(nilai<80){
  console.log("Nilai = C");
}else if(nilai<90){
  console.log("Nilai = B");
}else{
  console.log("Nilai = A");
}