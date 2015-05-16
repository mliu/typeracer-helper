var currentlyRunning = false;
window.onkeypress = function(event){
	event.preventDefault();
	if (event.keyCode == 32){
		var textBox = document.getElementById("inputfield");
    	var text = document.getElementsByClassName("highlight")[0];
    	typeOut(text.innerHTML, textBox);
  	}
}

window.typeOut = function(text, textBox){
	console.log(text + " " + textBox);
	if(currentlyRunning) {
		return;
	}
	var i = 0;
	currentlyRunning = true;
	var interval = setInterval(function(){
		textBox.value += text[i];
		i++;
		if(i == text.length){
			clearInterval(interval);
			currentlyRunning = false;
		}
	}, 5);
}