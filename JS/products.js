function openLightBox(img) {
	const lightbox = document.getElementById("lightbox");
	const lightImg = document.getElementById("lightbox-img");
	lightbox.src = img.src;
	lightbox.style.display = "flex";
}

function closeLightbox() {
	document.getElementById("lightbox").style.display = "none";
}


function toggleMoreImages() {
	console.log("Button clicked");
	const moreImages = document.querySelector(".see-more-photos");
	const btn = document.getElementById("seeMoreBtn");

	moreImages.classList.toggle("hidden");

	if (moreImages.classList.contains('hidden')) {
		btn.textContent = 'See-More';
	  } else {
		btn.textContent = 'See-Less';
	  }
}