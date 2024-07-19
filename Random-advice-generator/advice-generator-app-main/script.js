const id=document.querySelector('span')
const advice=document.querySelector('.advice')
const button=document.querySelector('.button')

button.addEventListener('click',()=>{
    fetch('https://api.adviceslip.com/advice')
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    renderAdvice(data);
    // allAdvice=data;
  })
})



function renderAdvice(data){
    id.innerText=data.slip.id;
    advice.innerText= '“'+data.slip.advice+"”";
     }
 
