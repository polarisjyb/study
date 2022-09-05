
console.log('a');

setTimeout( function() {
  console.log('digimon');
}, );

console.log('c');
console.log('d');
console.log('e');
console.log('f');
console.log('g');

// 순서를 어기는 타이머 함수(setTimeout)가 있다.


const timerId = setTimeout(() => console.log('hi'), 1000);

clearTimeout(timerId)