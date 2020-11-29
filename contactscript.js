let emailicon=document.getElementById("emailicon");
let email=document.getElementById("email");

emailicon.addEventListener('mouseover', () => {
	email.style.visibility="visible";
})

emailicon.addEventListener('mouseout', () => {
	email.style.visibility="hidden";
})