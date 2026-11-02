const people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

//kelompok laki-laki diatas 29 tahun
console.log("KELOMPOK LAKI-LAKI DIATAS 29 TAHUN");
for(const item of people){
  if(item.age>=29){
    console.log(item);
  }
}

//kelompok laki-laki kurang dari 29 tahun
console.log("KELOMPOK LAKI-LAKI DIBAWAH 29 TAHUN");
for(const item of people){
  if(item.age<29){
    console.log(item);
  }
}