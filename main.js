const card = document.querySelector("[data-card]");

card.addEventListener("mousemove", mouseMoveHandler);
card.addEventListener("mouseleave", mouseLeaveHandler);

function mouseMoveHandler(e) {
	const { clientX, clientY } = e;

	// Adjust the sensitivity and scale factor based on your preference
	const sensitivity = 0.04;

	// Calculate rotation angles based on mouse coordinates
	const rotateX = (clientY - window.innerHeight / 2) * sensitivity;
	const rotateY = (clientX - window.innerWidth / 2) * sensitivity;

	card.style.transform = `perspective(1000px) scale(1, 1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function mouseLeaveHandler(e) {
	setTimeout(() => {
		card.style.transition = "transform 0.3s ease";
		card.style.transform = "perspective(1000px) scale(1, 1) rotateX(0deg) rotateY(0deg)";
	}, 10);
	// Reset transition after it completes
	setTimeout(() => {
		card.style.transition = "none";
	}, 310);
}
