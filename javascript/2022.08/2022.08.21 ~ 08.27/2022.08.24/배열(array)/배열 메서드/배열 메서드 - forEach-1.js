let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


// ? 일반 명령방식
function crimsonLoop(arr){
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr)) {
    console.log(arr[i]);
    }
  }
}

for(let i = 0; i < arr.length; i++) {
  if(Array.isArray(arr)) {
  console.log(arr[i]);
  }
}

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// ? 배열 메서드 자바스크립트, 익명함수 방식
arr.forEach(function(a, b) {
  console.log(a + '값은 인덱스 :' + b);
});

// ? 화살표 함수 축약 방식 
arr.forEach((a)=>console.log(a));
