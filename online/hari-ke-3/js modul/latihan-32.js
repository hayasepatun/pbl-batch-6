const phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

function addColors(value){
  phone.colors.push(value);
}

addColors("Gold")
addColors("Silver")
addColors("Brown")

console.log(phone)