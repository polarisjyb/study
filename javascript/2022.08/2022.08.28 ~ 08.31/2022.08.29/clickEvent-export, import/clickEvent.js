
import clickEvent from './clickEvent-export.js'


window.addEventListener('load', () => {

  const h1 = document.querySelector('h1');
  console.log(h1);
  clickEvent(h1, 'crimson');
});
