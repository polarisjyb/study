const studentList = [
  "강예훈",
  "김성현",
  "류주완",
  "마근원",
  "박종인",
  "박재형",
  "송형주",
  "양상희",
  "원두진",
  "유민호",
  "이상호",
  "이소영",
  "이은수",
  "정동욱",
  "정윤환",
  "정정원",
  "지영빈",
  "한용준",
  "황초영",
  "김근수",
  "김승현",
  "전형민",
  "정연주",
  "이아연",
  "최화연"
  ];

const kdtStudentList = [];

function kdt(id, name) {
  if(typeof id === 'number'
    && typeof name === 'string') {
      this.id = id;
      this.name = name;
  }
}

for ( let i = 0; i < studentList.length; i ++) {
  kdtStudentList.push(new kdt(i+1, studentList[i]));
  if(kdtStudentList[i].name === '지영빈') {
    kdtStudentList[i].address = '유성구'
    }else{
      kdtStudentList[i].address = '몰라요'
    }
  if(kdtStudentList[i].name[0] === '지') {
    kdtStudentList[i].firstName = '저의 성씨는 지 입니다.'
    }else{
      kdtStudentList[i].firstName = '저의 성씨는 ' + kdtStudentList[i].name[0] + ' 입니다.'
    }
  }


console.log(kdtStudentList);
console.table(kdtStudentList);
// console.table(studentList)

const number = [];

function Array(number) {
  for(let i = 0; i < 20; i++) {
    number.push(i)
  }
}
