document.addEventListener('DOMContentLoaded', function () {
	// Event listeners for hover effects
	document.querySelector('.classic').addEventListener('mouseenter', function () {
		showDescription('.vision-one')
	})

	document.querySelector('.robotic').addEventListener('mouseenter', function () {
		showDescription('.vision-two')
	})

	document.querySelector('.game-jam').addEventListener('mouseenter', function () {
		showDescription('.vision-three')
	})

	function showDescription(className) {
		// Hide all descriptions
		document.querySelectorAll('.back-des p').forEach(function (el) {
			el.classList.remove('active')
		})

		// Show the relevant description
		document.querySelector(className).classList.add('active')
	}
	const slides = document.querySelectorAll('.carousel-slide')
	const prevBtn = document.querySelector('.prev-btn')
	const nextBtn = document.querySelector('.next-btn')
	const carousel = document.querySelector('.carousel')

	let currentIndex = 3 // Początkowy indeks
	const totalSlides = slides.length

	function updateCarousel() {
		slides.forEach((slide, index) => {
			if (window.innerWidth <= 768) {
				slide.classList.remove('active', 'left-1', 'left-2', 'left-3', 'right-1', 'right-2', 'right-3')
				slides[currentIndex].classList.add('active')
			} else {
				if (index === currentIndex) {
					slide.classList.add('active')
					slide.classList.remove('right-1', 'left-1')
				} else if (index === (currentIndex - 3 + totalSlides) % totalSlides) {
					slide.classList.add('left-3')
					slide.classList.remove('left-2', 'right-3')
				} else if (index === (currentIndex - 2 + totalSlides) % totalSlides) {
					slide.classList.add('left-2')
					slide.classList.remove('left-1', 'left-3')
				} else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
					slide.classList.add('left-1')
					slide.classList.remove('active', 'left-2')
				} else if (index === (currentIndex + 1) % totalSlides) {
					slide.classList.add('right-1')
					slide.classList.remove('right-2', 'active')
				} else if (index === (currentIndex + 2) % totalSlides) {
					slide.classList.add('right-2')
					slide.classList.remove('right-3', 'right-1')
				} else if (index === (currentIndex + 3) % totalSlides) {
					slide.classList.add('right-3')
					slide.classList.remove('right-2', 'left-3')
				}
			}
		})
	}

	prevBtn.addEventListener('click', () => {
		currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
		updateCarousel()
	})

	nextBtn.addEventListener('click', () => {
		currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1
		updateCarousel()
	})

	window.addEventListener('resize', updateCarousel())
	updateCarousel()
})
