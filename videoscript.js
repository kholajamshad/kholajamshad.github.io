/*Switching Between The Two BTS Images*/
let rbutton=document.getElementById("rbutton");
let lbutton=document.getElementById("lbutton");
let currimg=document.getElementById("bts1");

function img12(){
	currimg.src="bts12.png";
}
function img21(){
	currimg.src="bts11.jpg";
}

rbutton.addEventListener("click",() => {
	img12();
});

lbutton.addEventListener("click",() => {
	img21();
})