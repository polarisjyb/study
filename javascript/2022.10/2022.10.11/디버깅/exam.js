const examString = "korea dagital training fullstack for web development";

function checkVaildation(sentence) {
  const setRegExp = {
    num : /[0-9]/,
    eng : /[a-zA-Z]/,
    spc : /[~!@#$%^&*()_+|<>?:{}]/,
    kor : /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  }
  const checkData = () => {
    for (const key in setRegExp) {
      console.log(key);
      if (setRegExp[key].test(sentence) === true) {
        return key;
      }
    }
  }
  if (checkData() === "eng") {
    sentence = sentence.split(" ");
    console.log(sentence);
    let editArray = sentence.map((element) => {
      console.log(element[0].toUpperCase());
      console.log(element.substring(1, element.length));
      let tempString = element[0].toUpperCase() +   element.substring(1, element.length);
      console.log(tempString); //?
      return tempString;
    });
    console.log(editArray);
    return editArray;
  };
}
console.log(checkVaildation(examString));

