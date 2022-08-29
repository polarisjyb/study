
import nameChange from "./namChange(export).js";

const docInit = {
  body: document.body,
  root: document.createElement('div'),
  digimonDiv: document.createElement('div'),
  digimonDivLv: document.createElement('div')
}

const docStyling = {
  size: function(element, width, height){
    element.style.width = width;      
    element.style.height = height;      
  }
}


docInit.body.append(docInit.root);
docInit.root.id = 'root';
docStyling.size(docInit.root, '100vw', '100vh');


const DIGIMON_BASIC_URL = `https://digimon-api.vercel.app/api/digimon`;
  const D_request = new XMLHttpRequest();
    D_request.open('GET', DIGIMON_BASIC_URL);
    D_request.responseType = 'json';
    D_request.send();
    D_request.addEventListener('load', () => {
      const digimon = D_request.response;
      console.log(digimon);
      console.log(digimon.length);

      // console.dir(digimon);

      for(let i = 0; i < digimon.length; i++) {
        
        let digimonDiv = document.createElement('div');
        let digimonDivLv = document.createElement('div');
        
        docInit.root.append(digimonDiv);
        docInit.root.append(digimonDivLv);

        // console.log(digimonDiv);
        // console.dir(digimonDiv);
        // console.log(digimonDivLv);

        // console.log(digimon[i].name)
        // console.log(digimon[i].level);

        nameChange(digimonDiv, digimon);
        // digimonDiv.innerHTML = digimon[i].name + '님';
        digimonDivLv.innerHTML = digimon[i].level;

        docStyling.size(digimonDiv, '20vw', '20vh');
        // digimonDiv.style.width = '20vw';
        // digimonDiv.style.height = '20vh';

        docStyling.size(digimonDivLv, '10vw', '10vh');
        // digimonDivLv.style.width = '10vw';
        // digimonDivLv.style.height = '10vh';

        console.dir(digimonDiv);
        console.log(digimonDivLv);
        

        // 전체 이미지를 가져올 경우, 404 error 데이터를 가져올 수 없음.
        // 위와 같은 이유로 모든 디지몬 이미지를코로몬 이미지로 대체함.
        digimonDiv.style.backgroundImage = `url(https://digimon.shadowsmith.com/img/koromon.jpg)` ;
        digimonDiv.style.backgroundSize = 'cover';
        digimonDiv.style.backgroundRepeat = 'no-repeat';

      }
  })
