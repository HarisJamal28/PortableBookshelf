const count = document.getElementById('count')
let i = 0;
let x = document.querySelectorAll('img')

console.log(x);

count.innerText = `Total Books: ${x.length}`