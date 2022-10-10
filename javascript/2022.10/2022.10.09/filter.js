/*
  filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
  그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
  이때 원본 배열은 변경되지 않는다.
*/

const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 다음의 경우 numbers 배열에서 홀수인 요소만 필터링한다(1은 true로 평가된다).
const odds = numbers.filter(item => item % 2);
console.log(odds);  // [1, 3, 5]

// 원본 배열은 변경되지 않는다.
console.log(numbers);

/*
  forEach, map 메서드와 마찬가지로 filter 메서드는
  자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
  ( 고차 함수이기 때문 )

  forEach 메서드는 언제나 undefined를 반환하고, map 메서드는 콜백 함수의 반환값들로 구성된 새로운 배열을 반환하지만
  filter 메서드는 콜백 함수의 반환값이 true인 요소만 추출한 새로운 배열을 반환한다.

  filter 메서드는 자신을 호출한 배열에서 필터링 조건을 만족하는 특정 요소만 추출하여 새로운 배열을 만들고 싶을 때 사용한다.
  위 예제에서 filter 메서드의 콜백 함수는 요소값을 2로 나눈 나머지를 반환한다. 이때 반환값이 true, 즉 홀수인 요소만 추출하여 새로운 배열을 반환한다.
  따라서 filter 메서드가 생성하여 반환한 새로운 배열의 length 프로퍼티 값을 filter 메서드를 호출한 배열의 length 프로퍼티 값과 같거나 작다.
*/

/*
  forEach, map 메서드와 마찬가지로 filter 메서드의 콜백 함수는 filter 메서드를 호출한 배열의 요소값과 인덱스, filter 메서드를 호출한 배열 자체,
  즉 this를 순차적으로 전달받을 수 있다. 다시 말해, filter 메서드는 콜백 함수를 호출할 때 3개의 인수, 즉 filter 메서드를 호출한 배열의 요소값과 인덱스,
  filter 메서드를 호출한 배열(this)을 순차적으로 전달한다.
*/

// filter 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[4, 5, 6].filter((item, index, arr ) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
  요소값: 4, 인덱스: 0, this: [4, 5, 6]
  요소값: 5, 인덱스: 1, this: [4, 5, 6]
  요소값: 6, 인덱스: 2, this: [4, 5, 6]
*/

/*
  filter()를 사용한 배열 복사( 얕은 복사 Shallow Copy )
*/
const array = [1, 2, [3]];
const array_copy = array.filter(() => true);
console.log(array, array_copy);
// [1, 2, [3]]   [1, 2, [3]]

array.push(4);
console.log(array, array_copy);
// [1, 2, [3], 4]   [1, 2, [3]]

array[2].push(5);
console.log(array, array_copy);
// [1, 2, [3, 5], 4]   [1, 2, [3, 5]]