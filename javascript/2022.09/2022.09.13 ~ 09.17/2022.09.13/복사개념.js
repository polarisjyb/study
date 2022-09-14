/*
  Value and Reference type

  모든 데이터 타입은 값 타입(value type) 또는 참조 타입(referen type)을 가진다.

  * 값 타입(Value type) : 각각의 고유의 메모리를 소유한다.
  * 참조 타입(Reference type) : 생성된 인스턴스들은 주소 값을 공유한다.
*/


/*
  얕은 복사 (Shallow copy)

  우리가 흔히 알고 있듯이, 객체가 담겨있는 변수를 다른 변수에 할당하면 call by reference (데이터 복사가 아닌 참조)가 일어나게 되어,
  한 변수의 데이터를 변경하면 다른 변수의 데이터도 함께 변경이 된다.

  * 얕은 복사는 아주 최소한만 복사를 한다.
  * 값을 복사한다 하더라도, 인스턴스가 메모리에 새로 생성되지 않는다.
  * 값 자체를 복사하는 것이 아니라 참조값(주소값)을 복사하여 같은 메모리를 가리킨다.
  * 복사된 객체의 인스턴스 변수는 원본 객체의 인스턴스 변수와 같은 메모리 주소를 참조한다.
  * 따라서, 해당 메모리 주소의 값이 변경되면 원본 객체 및 복사 객체의 인스턴스 변수 값은 같이 변경된다.
  * 새로운 인스턴스를 생성하지 않기 때문에 깊은 복사보다 상대적으로 빠르다.
*/

const person1 = {name: '짱짱이'};

const person2 = person1;

console.log(person1.name) // 짱짱이

console.log(person2.name) // 짱짱이

console.log( person1 === person2 ); // true


let aa = [1, 2, 3];
let bb = aa;

bb.push(4);

console.log(aa);  //  [1, 2, 3, 4]
console.log(bb);  //  [1, 2, 3, 4]

console.log( aa === bb ); // true

/*
  깊은 복사 (Depth copy)

  한 데이터의 공유가 아닌, 똑같은 구조의 객체를 하나 더 생성하여 따로 사용하고자 할 때가 있다.

  이럴 때 우리는 '깊은 복사'라는 개념을 사용한다.

  깊은 복사는 객체의 실제 값(value)를 복사한다.

  * 데이터 자체를 통째로 복사한다 --> 객체를 복사 할 떄, 해당 객체와 인스턴스 변수까지 복사하는 방식.
  * 복사된 두 객체는 완전히 독립적인 메모리를 차지한다 --> 전부를 복사하여 새 주소에 담기 떄문에 참조(주소)를 공유하지 않는다.
*/

const a = 'a';
let b = 'b';

b = 'c';

console.log(a); // 'a'
console.log(b); // 'c'


let aaa = [1, 2, 3];
let bbb = [1, 2, 3];

bbb.push(4);

console.log(aaa); // [1, 2, 3]
console.log(bbb); // [1 ,2, 3, 4]

console.log( aaa === bbb ); // false