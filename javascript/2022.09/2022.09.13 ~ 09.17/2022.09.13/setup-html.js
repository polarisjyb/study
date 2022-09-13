function elementSetting(tagName, props) {
  props = typeof props === 'object' ? props : console.error('need object type arguments');
  tagName = typeof tagName === 'string' ? tagName : console.error('need string type arguments');

  let setElem = document.createElement(tagName);
  for(let styleName in props) {
    setElem.style[styleName] = props[styleName];
  }
  return setElem;

}

const root = document.getElementById('root');
root.appendChild(elementSetting('div', {
  width: '200px',
  height: '200px',
  backgroundColor: 'cadetblue'
}));