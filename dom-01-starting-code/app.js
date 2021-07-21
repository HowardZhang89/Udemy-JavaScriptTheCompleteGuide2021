const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

//const listItemElements = documents.querySelectorAll('li'); // modern way
const listItemElements = document.getElementsByTagName('li'); // old way

for(const listItemEl of listItemElements) {
  console.dir(listItemEl);
}