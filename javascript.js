window.onload = function() {
  show_FOE();
};

function show_FOE() {
	if (Math.floor(Math.random() * 100) < 1) {
		document.getElementById("BadMeme").style = "visible";
	}
}