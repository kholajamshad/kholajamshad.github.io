//VARIABLE DECLARATIONS
let homeicon=document.getElementById("homeicon"); //home icon
let campusicon=document.getElementById("campusicon"); //campus icon
let campusbg=document.getElementById("campusbg"); //campus background trailer
let homebg=document.getElementById("homebg"); //home background trailer
let question=document.getElementById("question"); //title and question div
let video=document.getElementById("vid"); //home video
let video2=document.getElementById("vid2"); //campus video
let close=document.getElementById("close"); //close button
let change=document.getElementById("change"); //the prompting question
var currvideo=video; //tracks which video is currently playing
var homewatch=false; //checks if home video has been opened
var campuswatch=false; //checks if campus video has been opened





//START PAGE INTERACTIVITY

//Icon Hover Events
//hover on icon makes icon colored, makes trailer visible and plays it on loop
homeicon.addEventListener('mouseover', () => {
	homeicon.src="./images/colored home.png";
	homebg.style.visibility="visible";
	homebg.play();
})
//mouse moves away from icon then icon goes back to black and white, trailer paused and hidden
homeicon.addEventListener('mouseout', () => {
	homeicon.src="./images/black and white home.png";
	homebg.style.visibility="hidden";
	homebg.pause();
})

//same interactivity as homeicon
campusicon.addEventListener('mouseover', () => {
	campusicon.src="./images/campus colored.png";
	campusbg.style.visibility="visible";
	campusbg.play();
})
campusicon.addEventListener('mouseout', () => {
	campusicon.src="./images/campus black and white.png";
	campusbg.style.visibility="hidden";
	campusbg.pause();
})


//Icon Click Events
//clicking on home icon
homeicon.addEventListener('click', () => {
	//shows associated video and the close button
	video.style.display="block";
	close.style.display="block";
	//sets home video as current and watched
	currvideo = video;
	homewatch=true;
	
	//hides icons and question while video plays
	homeicon.style.display="none";
	campusicon.style.display="none";
	question.style.visibility="hidden";
});
//same coded interactivity as click on home icon
campusicon.addEventListener('click', () => {
	video2.style.display="block";
	close.style.display="block";
	currvideo = video2;
	campuswatch=true;
	
	homeicon.style.display="none";
	campusicon.style.display="none";
	question.style.visibility="hidden";
});


//Close Button Click
close.addEventListener('click', () => {
	//stops playing the video on close
	currvideo.pause();

	//hides the video playing elements
	close.style.display="none";
	currvideo.style.display="none";
	//displays start page elements
	homeicon.style.display="block";
	campusicon.style.display="block";
	question.style.visibility="visible";
	
	//changes prompting question after one video has been opened
	change.innerHTML="Want to see the other side?";

	//if both videos have been opened then the prompting questions go away
	if(homewatch & campuswatch){
	change.style.visibility="hidden";
	}
})

