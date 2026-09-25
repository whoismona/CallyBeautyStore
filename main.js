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
function viewProduct(image) {
    document.getElementById("modalImage").src = image;
    document.getElementById("productModal").style.display = "flex";
}

function closeProduct() {
    document.getElementById("productModal").style.display = "none";
}
function sendWhatsApp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let text = `Hello CallyBeautyStore!

Name: ${name}
Email: ${email}
Message:
${message}`;

    let whatsappNumber = "2347065723958";

    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
}