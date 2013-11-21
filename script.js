window.onkeypress = function(event){
  if (event.keyCode == 32){
    var text = document.getElementById("nhwMiddlegwt-uid-8").innerHTML;
    var comma = document.getElementById("nhwMiddleCommagwt-uid-9").innerHTML;
    textBox = document.getElementsByClassName("txtInput")[0];
    textBox.value = text + comma;
    console.log('"' + text + comma + '"');
  }
}