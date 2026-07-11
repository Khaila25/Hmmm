function surprise() {

	document.getElementById("awal").style.display = "none";
	
	const video=document.getElementById("video");
	
	video.style.display="block";
	
	video.volume=1;
	
	video.play();
	
}