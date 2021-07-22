const ul = document.body.firstElementChild.nextElementSibling
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

//section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click',() => {
  // if (section.className === 'red-bg visible'){
  //   section.className = 'red-bg invisible';
  // }else{
  //   section.className = 'red-bg visible';
  // }
  
  // We can use classList.toggle to replace the above code.
  //section.classList.toggle('visible');  // can ignore this since invisible is the only part that makes a difference.
  section.classList.toggle('invisible');
});