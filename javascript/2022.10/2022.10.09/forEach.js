/*
  forEach 메서드는 for 문을 대체할 수 있는 고차 함수다. forEach 메서드는 자신의 내부에서 반복문을 실행한다.
  즉 forEach 메서드는 반복문을 추상화한 고차 함수로서
  내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다.
*/

const numbers = [1, 2, 3];
const pows = [];

// forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
numbers.forEach(item => pows.push(item ** 2));
console.log(pows);  // [1, 4, 9]

// forEach 메서드는 numbers 배열의 모든 요소를 순회하며 콜백 함수를 반복 호출한다.
// numbers 배열의 요소가 3개이므로 콜백 함수도 3번 호출된다.
// 이때 콜백 함수를 호출하는 forEach 메서드는 콜백 함수에 인수를 전달할 수 있다.

/*
  forEach 메서드의 콜백 함수는 forEach 메서드를 호출한 배열의 요소값과 인덱스, forEach 메서드를 호출한 배열 자체,
  즉 this 를 순차적으로 전달받을 수 있다. 다시 말해, forEach 메서드는 콜백 함수를 호출할 때 3개의 인수,
  즉 forEach 메서드를 호출한 배열의 요소값과 인덱스, forEach 메서드를 호출한 배열(this)을 순차적으로 전달한다.
*/

//forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
}); 
/*
  요소값: 1, 인덱스: 0, this: [1, 2, 3]
  요소값: 2, 인덱스: 1, this: [1, 2, 3]
  요소값: 3, 인덱스: 2, this: [1, 2, 3]
*/

/* 
  forEach 메서드는 원본 배열(forEach 메서드를 호출한 배열, 즉 this)을 변경하지 않는다.
  하지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
*/

const number = [1, 2, 3];

// forEach 메서드는 원본 배열을 변경하지 않지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
// 콜백 함수의 세 번째 매개변수 arr은 원본 배열 number를 가리킨다.
// 따라서 콜백 함수의 세 번쨰 매개변수 arr을 직접 변경하면 원본 배열 number가 변경된다.
number.forEach((item, index, arr) => {
  arr[index] = item * 3;
});

console.log(number);  // [3, 6, 9]


[10, 20, 30].forEach((item, index, arr) => {
	console.log(`${item} : ${index} : ${arr}`);
  /*
    10 : 0 : 10, 20, 30
    20 : 1 : 10, 20, 30
    30 : 2 : 10, 20, 30
  */
});

  