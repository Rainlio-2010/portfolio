let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("school-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.display = ""; // Clear any inline styles that might interfere
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}