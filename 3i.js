let button1=document.getElementById("b1");
let button2=document.getElementById("b2");
let button3=document.getElementById("b3");

let panel1=document.getElementById("p1");
let panel2=document.getElementById("p2");
let panel3=document.getElementById("p3");

let line1=document.getElementById("s1");
let line2=document.getElementById("s2");
let line3=document.getElementById("s3");


button1.addEventListener("click", () => {

	panel1.src="./images/lighteye.png";
	line1.innerText="I had seen the car coming";
	panel2.src="./images/bloodeye.png";
	line2.innerHTML="so when I realized the blood was hers";
	panel3.src="./images/eyeeye.png";
	line3.innerHTML="I knew it would always be my fault";

});

button2.addEventListener("click", () => {

	panel1.src="./images/eyeeye.png";
	line1.innerHTML="The look in his eye made it obvious";
	panel2.src="./images/bloodeye.png";
	line2.innerHTML="that I couldn't let him leave alive";
	panel3.src="./images/lighteye.png";
	line3.innerHTML="and that's how they found me";


});

button3.addEventListener("click", () => {

	panel1.src="./images/bloodeye.png";
	line1.innerHTML="I feel my body go cold";
	panel2.src="./images/lighteye.png";
	line2.innerHTML="but the last thing I wanted to see";
	panel3.src="./images/eyeeye.png";
	line3.innerHTML="was your eyes when you found me";

});
