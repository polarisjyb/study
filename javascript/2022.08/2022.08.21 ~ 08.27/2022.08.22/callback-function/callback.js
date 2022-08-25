let second = function () {
  console.log('익명');
}


function first(text, b) {
  if(typeof(text) === 'string') {
    console.log( text + '했습니다.' );
    b();
    return '반환했습니다.';
  } else {
    console.log('콘솔 확인해');
  }
}

first('업로드', second);
