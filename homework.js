let list = document.querySelector(".list");
let form = document.querySelector(".form");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let data = [];

form.addEventListener("submit", (e) => {
 
  e.preventDefault();
  let item = document.createElement("li");
  item.innerHTML = input.value;
  item.className = 'item';
  input.value = null;
  list.append(item);

});



