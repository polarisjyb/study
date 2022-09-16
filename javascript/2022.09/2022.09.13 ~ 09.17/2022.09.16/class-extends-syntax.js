/*
  일종의 거푸집 역할을 하는 생성자 함수는 대량의 객체를 찍어내는데 으뜸이다.
  그러다보니 한 번에 모든 걸 잘 만들어야 하는 압박이 발생한다.

  그리고 큰 데이터를 '유연하게' 다뤄야 하다보니 부모 자식 관계로서 접근하는 생성자 함수를 사용하면 더 편리하다.

  '기존 생성자 함수가 기능하는 것을 그대로 상속 받아와 다른 생성자 함수를 만들려면.'

  바로 extends 문법이다.

  부모의 클래스로부터 상속받아 목적에 맞게 생성자 함수를 구성한다는 것이 핵심이다.
  React.Component 라는 이름의 생성자 함수의 하위클래스로 붙이는 작업을 하기 때문에 상당히 중요한 개념 중에 하나이다.
*/

class ParentObject {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

let ParentObjectInstance = new ParentObject('1', '짱짱이', 'cadetblue');
console.log(ParentObjectInstance);

// 부모 클래스의 기능을 그대로 전수(?) 받은 자식 Class. type이라는 속성을 추가 하여 부모 클래스와 다른 인스턴스를 생성할 수 있다.
class ChildObject extends ParentObject {
  constructor (type) { // 부모 때문에 type 매개변수는 index 3번쨰가 된다.
    super();  // 부모의 constructor() 데이터를 가져오는 특수한 함수다.
    this.type = type; 
  }
}

let childObjectInstance = new ChildObject('풀');
console.log(childObjectInstance);