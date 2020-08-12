function changeScript(elemId) {
  var Script = document.createElement('script');
  Script.textContent = document.getElementById(elemId).innerText;
  document.getElementsByTagName('head')[0].appendChild(Script);
  document.getElementById(elemId).appendChild(Script)
  Script.replaceWith(...document.getElementById(elemId).childNodes);
}