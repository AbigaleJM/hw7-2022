
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	console.log("Loading the video");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector("#player1")
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.querySelector("#player1");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow video");
	video = document.querySelector("#player1");
	video.playbackRate -= 0.10;
	rate = video.playbackRate;
	console.log("New speed is " + rate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video = document.querySelector("#player1");
	video.playbackRate += 0.10;
	rate = video.playbackRate;
	console.log("New speed is " + rate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead");
	video = document.querySelector("#player1");
	video.currentTime += 15;
	console.log(video.currentTime)
	if (video.ended == true) {
		video.play();
	}
});

document.querySelector("#mute").addEventListener("click",function() {
	video = document.querySelector("#player1");
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#volume").innerHTML = this.value;
	} else if (video.muted==false) {
		video.muted = true;}
		document.querySelector("#volume").innerHTML = 0;
});

document.querySelector("#slider").addEventListener("change",function() {
    console.log("I am sliding");
	video = document.querySelector("#player1");
	video.volume = this.value + "%";
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = this.value;
});

document.querySelector("#vintage").addEventListener("click",function() {
    console.log("Applying oldSchool");
	video = document.querySelector("#player1");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click",function() {
    console.log("Removing oldSchool");
	video = document.querySelector("#player1");
	video.classList.remove("oldSchool")
});