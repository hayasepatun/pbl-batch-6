//buat array of object 
const buah = [
  {nama:"Nanas",warna:"Kuning",adaBijinya:"tidak",harga:9000},
  {nama:"Jeruk",warna:"Oranye",adaBijinya:"ada",harga:8000},
  {nama:"Semangka",warna:"Merah",adaBijinya:"ada",harga:7000},
  {nama:"Pisang",warna:"Kuning",adaBijinya:"tidak",harga:5000}
]

//print array
console.log(buah);
console.log("========================");

//print elemen objeknya saja
for (const item of buah) {
  console.log(item);
}
console.log("========================");

//munculkan data yang tidak memiliki biji
for(const item of buah){
  if(item.adaBijinya=="tidak"){
    console.log(item);
  }
}