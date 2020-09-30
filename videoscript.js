let abutton=document.getElementById("rbutton");
let bbutton=document.getElementById("lbutton");
let currimg=document.getElementById("bts1");

function img12(){
	currimg.src="bts12.png";
}
function img21(){
	currimg.src="bts11.jpg";
}

abutton.addEventListener("click",() => {
	img12();
});

bbutton.addEventListener("click",() => {
	img21();
})