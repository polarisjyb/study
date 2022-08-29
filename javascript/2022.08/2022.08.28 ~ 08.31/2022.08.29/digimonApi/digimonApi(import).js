
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


docInit.body.appendChild(docInit.root);
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
        let digimonImg = document.createElement('img');
        let digimonDivLv = document.createElement('div');
        
        docInit.root.appendChild(digimonDiv);
        docInit.root.appendChild(digimonImg);
        docInit.root.appendChild(digimonDivLv);
        

        // console.log(digimonDiv);
        // console.dir(digimonDiv);
        // console.log(digimonDivLv);

        // console.log(digimon[i].name)
        // console.log(digimon[i].level);

        nameChange(digimonDiv, digimon);
        // digimonDiv.innerHTML = digimon[i].name + '님';
        digimonDivLv.innerHTML = digimon[i].level;

        docStyling.size(digimonDiv, '100px', '20px');
        // digimonDiv.style.width = '20vw';
        // digimonDiv.style.height = '20vh';

        docStyling.size(digimonDivLv, '100px', '20px');
        // digimonDivLv.style.width = '10vw';
        // digimonDivLv.style.height = '10vh';

        // console.dir(digimonDiv);
        // console.log(digimonDivLv);
        
        digimonImg.src = digimon[i].img;
        digimonImg.style.width = '100px'
        
        digimonDiv.style.backgroundSize = 'cover';
        digimonDiv.style.backgroundRepeat = 'no-repeat';

      }
  })
