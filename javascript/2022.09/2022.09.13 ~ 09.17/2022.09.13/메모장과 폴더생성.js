const fs = require('fs');

// fs.writeFile('./bin.txt', '빈', function(error) {
//   if(error) {
//     throw error;
//   }
// });
// 메모장 생성

fs.mkdir('./bin', function(error) {
  if(error) {
    throw error;
  }
});
// 폴더 생성