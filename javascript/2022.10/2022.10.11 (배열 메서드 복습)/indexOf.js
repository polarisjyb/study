/*
  indexOf 는 배열에서 원하는 특정 항목이 배열의 몇 번째 원소인지 찾아 index를 리턴해주는 함수. 만약에 못 찾으면 -1을 리턴한다.

  특정 값이랑 일치하는 것의 인덱스를 찾을 때 사용한다.
  일치하는 것 중 가장 처음 마주하는 값의 인덱스를 반환한다.
*/

const superheros = ['아이언맨', '캡틴 아메리카', '토르', '블랙팬서'];

const index1 = superheros.indexOf('토르');
console.log(index1);  // 2

const index2 = superheros.indexOf('아이언맨');
console.log(index2);  // 0

const index3 = superheros.indexOf('울버린');
console.log(index3);  // -1