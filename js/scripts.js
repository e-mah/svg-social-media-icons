// load svgdefs.svg sprite and insert into DOM
// source: https://css-tricks.com/ajaxing-svg-sprite/
var ajax = new XMLHttpRequest();
ajax.open("GET", "images/graphics/svgdefs.svg", true);
ajax.send();
ajax.onload = function(e) {
  var div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
}