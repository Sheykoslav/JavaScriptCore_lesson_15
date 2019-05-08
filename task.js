function txtHidden(){
  var elem = document.getElementById('text');
  elem.style.display = 'none';
}
function buttonHidden(){
  var elem = document.getElementsByTagName('input')[1];
  elem.style.display = 'none';
}

var menuElem = document.getElementById('university');
var titleElem = menuElem.querySelector('.title');
titleElem.onclick = function(){
  menuElem.classList.toggle('open');
}
