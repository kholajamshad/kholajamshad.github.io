/*Video Description Toggle*/

/*Takes button and video description elements
On mouse click, checks text in button with if-else condition
And accordingly shows or hides description*/
let button1=document.getElementById("vidbutton1");
let vidintro1=document.getElementById("vidintro1");


button1.addEventListener("click", () => {

	if (button1.innerText==">"){
		button1.innerHTML="v";
		vidintro1.innerHTML="Description";
	}

	else{
		button1.innerHTML=">";
		vidintro1.innerHTML="A short film based on different people across the world learning to live and interact together with the norm of wearing face masks during the COVID-19 pandemic.";
	}
});




