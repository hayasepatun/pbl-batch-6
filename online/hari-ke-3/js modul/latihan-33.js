const people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

const peopleSort = people.sort((a,b)=>{
 return a.age-b.age;
})

console.log(peopleSort)

function munculkanNama(){
  for(i=1;i<=peopleSort.length;i++){
   console.log(i + ". "+ peopleSort[i-1].name); 
  }
}

munculkanNama()
