console.log('SQUARE');
let number = 5;
let strings = '';

for(let i = 1;i<=number;i++){
  for(let j=1; j<=number;j++){
    strings += '*'
  }
  
  strings += '\n'
}
console.log(strings)
//---------------------------------------------------------
console.log('HOLLOW SQUARE');
let numbers = 5;
let strs = '';

for(let i = 1;i<=numbers;i++){
  for(let j = 1 ;j<=numbers;j++){
    if(i === 1 || i === numbers){
    strs += '*'
    }else if(j === 1 || j === numbers){
      strs += '*'
    }else{
      strs += ' '
    }
  }
  
  strs += '\n'
}
console.log(strs)
//---------------------------------------------------------
console.log('INVERSE PYRAMID');
let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
//--------------------------------------------------------
console.log('INVERSE RIGHT TRIANGLE');
let num = 5;
let str = "";
for(let i = 0;i<num;i++){
  for(let j=1; j<=i;j++){
    str += ' '
  }
  for(let k =1;k<=n-i;k++){
    str += '*'
  }
  str += '\n'
}
console.log(str)

