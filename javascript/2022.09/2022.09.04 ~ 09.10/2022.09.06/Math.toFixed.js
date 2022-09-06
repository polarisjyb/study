// Number.prototype.toFixed() 메서드
// Number 인스턴스의 소수 부분 자릿수를 전달받은 값으로 고정한 후, 그 값을 문자열로 반환합니다.
// 소수 부분 자릿수를 전달 받지 않고 공백으로 두었을 때, 소수 부분 자릿수 없이 반환합니다.

// 반환 값으로는 변수로 지정된 수의 소수점 자릿수가 전달받은 소수 부분 자릿수보다 길면 숫자를 반올림하고, 짧아서 부족할 경우 뒤를 0으로 채웁니다.

// 파라미터(주어진 소수 부분 자릿수)의 값이 0과 100사이의 값이 아니라면 Uncaught RangeError 라는 오류가 발생됩니다.

let number = 1.23456

// 소수 부분 자릿수를 전달 받지 않고 공백으로 두었을 때, 소수 부분 자릿수 없이 반환합니다.
console.log(number.toFixed());  // 1

// 전달받은 소수 부분 자릿수가 3이므로 소수점 뒷자리 3번째까지 표기된 값을 반환하는데
// 전달받은 자릿수보다 변수로 지정된 값이 소수점 뒷자리가 길기 때문에 4번째 자리에서 반올림하여 반홥합니다.
console.log(number.toFixed(3)); // 1.235

// 변수로 지정된 값이 짧으므로 뒤를 0으로 채워서 여섯째 자리까지 반환합니다.
console.log(number.toFixed(6)); // 1.234560

console.log(number.toFixed(101)); // 결과: RangeError: toFixed() digits argument must be between 0 and 100