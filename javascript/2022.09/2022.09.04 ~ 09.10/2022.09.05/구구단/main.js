
// 2단부터 9단까지 다 출력
// const gogodan = () => {
//   for(let i = 2; i <= 9; i++) {
//     console.log(i + '단');
//     for(let j = 1; j <= 9; j++ ) {
//       console.log(i + '*' + j + '=' + (i*j)+ '</br>' );
//     }
//   }
// }

const gogodanArr = [];

// n 단을 생성해주는 gogodan 함수를 만들었다.
function gogodan(n) {
  //초기값 설정, 비교, 증감
  for(let i = 1; i <= 9; i++){
    console.log( n + 'x' + i + '=' +  n * i );
    gogodanArr[i-1] = n + 'x' + i + '=' +  n * i ;
  }
  return gogodanArr
}

// 구구단 2단을 출력해준다.
gogodan(2)

console.log(gogodanArr)

// html 문서 script 에서 작성해야 보임
// function test(input){
//   //초기값 설정, 비교, 증감
//   for(let i = 1;i < 10;i++){
//     document.write(input+'*'+i+'='+ input*i +'<br>');
//   }
// }
// test(2);

const body = document.body

body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';


const root = document.getElementById('root');

root.style.width = '50vw';
root.style.height = '100vh';
root.style.backgroundColor = 'cadetblue'

root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';


console.log(root);


const ul = document.createElement('ul');

console.log(ul);

root.appendChild(ul);

const li = document.createElement('li');

console.log(li);

ul.appendChild(li);

li.style.listStyle = 'none';


function liList() {
  for(let i = 1; i < gogodanArr; i ++) {
    let element = document.createElement('li')
    li.innerHTML = gogodanArr[i];
  }
}

