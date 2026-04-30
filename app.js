

// // querySelector , querySelectrAll
// // textContent
// // setAttribute
// // Math.round()
// // Math.random()
// // addEventListener
// // appendChild
// //create element


const p =document.querySelector('.text')
const text = document.querySelectorAll('.text')
p.textContent= 'hii'
const input = document.createElement('input')
input.setAttribute = ('type', 'text')
const body = document.querySelector('body')
body.appendChild(input)
console.log(Math.round(2.3));
console.log(Math.round(Math.random()* 100));
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  console.log("Button bosildi!");
});







