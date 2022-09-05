
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
    console.log( n + ' ' + 'x' + ' ' + i + ' ' +'=' + ' ' +  n * i );
    gogodanArr[i-1] = n + ' ' + 'x' + ' ' + i + ' ' +'=' + ' ' +  n * i ;
  }
  return gogodanArr
}

// 구구단 2단을 출력해준다.
gogodan(2)

console.log(gogodanArr.length)

// html 문서 script 에서 작성해야 보임
// function test(input){
//   //초기값 설정, 비교, 증감
//   for(let i = 1;i < 10;i++){
//     document.write(input+'*'+i+'='+ input*i +'<br>');
//   }
// }
// test(2);


// const html = document.documentElement
// console.dir(html)

const body = document.body
// console.dir(body)

body.style.margin = '0';
body.style.padding = '0';
body.style.boxSizing = 'border-box';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';


const root = document.getElementById('root');

root.style.width = '100%';
root.style.height = '100vh';
root.style.backgroundColor = 'cadetblue'

root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';

console.log(root);


const ul = document.createElement('ul');

console.log(ul);

root.appendChild(ul);

ul.style.margin = '0';
ul.style.padding = '0';
ul.style.boxSizing = 'border-box';
ul.style.listStyle = 'none';

// gogodanArr 배열의 길이와 같은 개수의 li 태그를 생성하고 스타일 제어하는 반복문 작성
for(let i = 0; i < gogodanArr.length; i++) {
  let element = document.createElement('li')
  element[i] = gogodanArr[i]
  element.style.padding = '20px';
  element.style.fontSize = '3vw';
  element.innerHTML = gogodanArr[i]
  ul.appendChild(element)
} 

/* for문을 작성하는 것에 뭔가 착각을 한 듯 이상하게 작성했어서 해멨다.. 이번 기회로 다음에는 헤매는 경우가 적어지거나
  헤매는 시간이 줄어들것으로 예상한다.
*/

// function liList() {
// for(let i = 0; i < gogodanArr.length; i++) {
//   let element = document.createElement('li')
//   element[i] = gogodanArr[i]
//   ul.appendChild(element)
// }
//   return ul.li
// }

// liList()


// for(let i = 0; i < gogodanArr.length; i++) {
//   let element = document.createElement('li')
//   element[i] = gogodanArr[i]
//   ul.appendChild(element)
// }

// const li = document.querySelector('li')

// console.dir(li)

// const li = document.createElement('li')

// ul.appendChild(li)



// function liInnerHTML () {
// for(let i = 0; i < li.length; i++) {
//   li[i].innerHTML = gogodanArr[i]
// }
//   return gogodanArr
// }

// liInnerHTML()

// console.log(liInnerHTML())

