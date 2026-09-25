const menuBtn=document.querySelector("#menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener('click', function() {
	nav.classList.toggle("active");

	if (nav.classList.contains("active")){
		menuBtn.textContent = "✕";
	}else{
		menuBtn.textContent = "☰";
	}
	
});