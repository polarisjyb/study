const ho = {
  lecter : {
    name: 'KF2',
    palce: 'steam',
    time: '9시'
  },
  tutor : {
    name: 'scrake',
    age: 34
  },
  study : ['html', 'css', 'js', 'react'],
  bloat : {
    home : '대전',
    address : {
      region : {
        name : '서구',
        dong : '둔산동',
        detail : {
          first : '오라클 빌딩',
          second : '그린학원',
          third: '305호'
        }
      }
    }
  }
}

console.log(ho.study[ho.study.length-1]); // react

ho.study[ho.study.length] = 'hacker';

ho.study.push('craker');

console.log(ho.study); // ['html', 'css', 'js', 'react', 'hacker', 'craker']

console.table(ho);

// console.log(ho.bloat.address.region.detail.second); // 그린학원

// let value = ho.bloat.address.region.detail.second;
// console.log(value); //  그린학원


/* 

ho.study[?] : 접근법, access : 접속

ho라는 객체를 만들때
‘정적으로 값을 작성했다’

ho라는 객체의 어느 값을 ‘동적’으로 ‘처리했다’

*/



/* 구조 분해 할당 */
const {bloat:{address:{region:{detail:{third:value}}}}} = ho;

console.log(ho);

console.log(ho.bloat.address.region.detail.third); //305호

let place = ho.bloat.address.region.detail.third;

console.log(place); // 305호
console.log(typeof(place)); // string

if (typeof place === 'string' ) { // 만약 place의 데이터 타입이 '문자열' 이면 place에 '306호'를 대입하고 출력해주세요.
  place = '306호'
  console.log(place);
} else if (typeof place === 'number') { // 위의 경우가 아니라 만약 place의 데이터 타입이 숫자형이면 'place의 데이터 타입은 숫자형 입니다.' 라고 출력해주세요.
  console.log('place의 데이터 타입은 숫자형 입니다.');
}
  else { // 그 이외의 경우라면 'place의 데이터 타입은 문자열도, 숫자형도 아닙니다.' 라고 출력해주세요.
  return 'place의 데이터 타입은 문자열도, 숫자형도 아닙니다.';
}

