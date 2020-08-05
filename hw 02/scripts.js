let myCode1 = document.getElementById("myCode1");
let runMyCode1 = document.getElementById("runMyCode1");

myCode1.innerHTML = `
function getList() {
  alert('Ok');
}
console.log('Ok')
getList();
`;

runMyCode1.addEventListener("click", runCode);

function runCode() {
  /* let textEval = myCode1.innerHTML; */
  let textEval = myCode1.textContent;
  let evalTextFunc = `
  function evalFunc() {
    ${textEval}
  }
  evalFunc();
  `;

  eval(evalTextFunc);
}
