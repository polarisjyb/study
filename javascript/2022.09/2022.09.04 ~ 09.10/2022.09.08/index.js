function OldConstructor(id, name, type) {
  this.id = id;
  this.name = name;
  this.type = type;
}

const OldInstance = new OldConstructor(1, '아구몬', '공룡');
console.log(OldInstance);

class NewConstructor {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const newInstance = new NewConstructor(4, '파피몬', '늑대');
console.log(newInstance);






const root = document.getElementById('root');

class tag {
  constructor(parentTag, tagName, idValue) {
    this.parentTag = document.createElement(parentTag);
    this.tagName = document.createElement(tagName);
    root.appendChild(this.parentTag);
    this.parentTag.appendChild(this.tagName);
    this.tagName.id = idValue;
    
  }
}


const newTag = new tag('div', 'article', 'kokoa');

console.log(newTag)


console.log(document.body.children[0])