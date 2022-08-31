

function Alice(name, age, habit) {
  if(typeof name === 'string'
    && typeof age === 'number'
    && typeof habit === 'string') {

    this.name = name;
    this.age = age;
    this.habbit = habit;
  }
}

// function Alice(name, age, habit) {
//   this.name = name;
//   this.age = age;
//   this.habbit = habit;
// }


const aliceMembers = new Alice('alice', 14, 'walking');

console.log(aliceMembers)






// for(let i = 0; i < 8; i++) {
//   aliceMembers.push(new Alice('l', 15, 'walking'));
// }

// console.log(aliceMembers);














// const members = [];

// for(let i = 0; i < 5; i++) {
//   members.push(new kdt(i+1, 'hello', 'bye'));
// }

// // 객체로 구성된 배열
// console.log(members)