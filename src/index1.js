function solveLinear(b, c){
  return -c / b;
}

function someLogic(str){
  if (str.length >= 5){
    return str.split('').reverse().join('');
  } else {
    return str;
  }
}

function asyncLogic(onFinish){
  setTimeout(()=>{
    onFinish(123);
  }, 1000);
}

function domCreate(){
  let el = document.createElement('button');
  el.textContent = '12345';
  return el;
}

module.exports = {
  solveLinear,
  someLogic,
  asyncLogic,
  domCreate
}
