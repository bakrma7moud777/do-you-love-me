let yesbtn =document.querySelector('.yesbtn');
let nobtn =document.querySelector('.nobtn');
let container =document.querySelector('.container');
let result =document.querySelector('.result')
// test.addEventListener('mouseenter',()=>{
//     result.classList.add('bg-danger')
// })
// test.addEventListener('mousedown',()=>{
//     result.classList.add('bg-danger')
// })
yesbtn.addEventListener('click',()=>{
   result.innerHTML="I love you too ❤️";
   console.log("er");
   
});
let conrec =container.getBoundingClientRect();
console.log(conrec)
let norec =nobtn.getBoundingClientRect();
console.log(norec)
nobtn.addEventListener('mouseover',()=>{
    console.log("test")
    let i =Math.floor(Math.random()*(conrec.width-norec.width))+1;
    let x =Math.floor(Math.random()*(conrec.height-norec.height))+1;
    console.log(i)
    console.log(x)
    nobtn.style.left=i+'px';
    nobtn.style.top=x+'px';
})