
/*
  primitive (원시 값)

  원시 타입 (Primitive Type) : String, Number, Boolean, Null, Undefined, Symbol

  원시 값은 읽기 전용으로 변경 불가능한 값이다.
  원시 값을 할당한 변수는 원시 값 자체를 값으로 갖는다.

  여기서 변경 불가능한 값은 변수에 재할당이 불가능하단 의미가 아니라, 메모리에 올라간 값이 변경되지 않는 다는 의미이다.

  원시 타입의 변수들은 데이터 복사가 일어날 때 메모리 공간에 값이 저장되고 변수는 그 주소를 참조한다. 재할당도 마찬가지로 새로운 메모리 공간을 확보하여 값을 저장하고 변수가 참조하던 기존 주소를 새로 할당한 값의 주소로 변경하는 것이다.

  즉, 값이 직접 변경되는 것이 아닌 참조하는 메모리 공간의 주소가 변경되는 것이다.
*/

let c = 1;
let d = 1;

console.log( c === d ); //  true

const gg = '1';
const ee = gg;

console.log(ee)
console.log(gg)
console.log( ee === gg )

let ac = 'ac';
let bc = 'ac';

console.log( ac === bc ); // true

let cd = true;
let dc = true;

console.log( cd === dc ); // true



const obj1 = { a:1, b:2 };
const obj2 = { ...obj1 };

obj2.a = 100;

console.log( obj1 === obj2 ) // false
console.log( obj1.a ) // 1
console.log( obj2 ) // { a: 100, b: 2 }

/*
  Reference ( 참조 값 )

  객체 타입 (Reference Type) : Array, Object, Function

  원시 타입이 아닌 값이 할당된 변수들은 그 값으로 향하는 참조(reference)를 갖게 된다.

  실제 객체의 값은 별도의 메모리 공간에 저장되며 변수는 그 공간을 참조하는 주소를 값으로 갖는다.

  즉, 참조 값은 생성된 객체가 저장된 메모리 공간의 주소를 의미한다.

  객체는 우리의 컴퓨터 메모리 어딘가에 생성된다. 우리가 arr = [] 를 작성했을 때, 우리는 메모리 내부에 배열을 만든 것이다.

  변수 arr이 갖는 것은 그 배열이 위치한 주소이다.

  참조 값은 직접적으로 객체에 접근 (주소에 접근) 하여 프로퍼티를 동적으로 추가, 갱신, 삭제가 가능하다.
  이것이 변경 가능한 값의 의미이다.
*/

let a = [1,2,3];
let b = [1,2,3];

console.log(a);
console.log(b);

console.log( a === b ); //  false


let aa = [1, 2, 3];
let bb = aa;

bb.push(4);

console.log(aa);  //  [1, 2, 3, 4]
console.log(bb);  //  [1, 2, 3, 4]

console.log( aa === bb ); // true


// 메서드 축약 --> 명령

let e = [2, 3, 4];
let f = e.map((value) => value);

console.log(e);
console.log(f);

console.log( e === f );

// e.map(function(value) {
//   return value;
// })

// function cmdMap(arr) {
//   let temp = [];
//   arr.forEach(function(value) {
//     temp.push(value);
//   });
//   return temp;
// }

// function cmdMapTwo (arr) {
//   let temp = [];
//   for(let i = 0; i < arr.length; i++) {
//     temp[temp.length] = arr[i];
//   }
//   return temp;
// }
