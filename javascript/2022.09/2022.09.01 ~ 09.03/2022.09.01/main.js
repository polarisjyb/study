




function style(style, styleValue ) {
  if(typeof style === 'string'
    && typeof styleValue === 'string'
  ) {

    this.style = style;
    this.styleValue = styleValue;
  }
}

const styleList = new style('width', '100px');

console.log(styleList)

