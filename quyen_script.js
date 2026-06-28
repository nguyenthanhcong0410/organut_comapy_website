const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;
let autoSlideInterval;


function updateSliderPosition() {
    if (slider) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
}


function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        index++;
        if (index >= slides.length) {
            index = 0; 
        }
        updateSliderPosition();
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}


function nextSlideButton() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    updateSliderPosition();
    resetAutoSlide(); 
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1; 
    }
    updateSliderPosition();
    resetAutoSlide(); 
}


startAutoSlide();



function toggleDetails(button) {
    
    const extraDetails = button.nextElementSibling;
    
    
    extraDetails.classList.toggle('open');
    
    
    if (extraDetails.classList.contains('open')) {
        button.textContent = "Hide details";
    } 
    
    else {
        button.textContent = "More details";
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('falling-container');
    if (!container) return;

    
    const nutImages = [
        'occho.png',
        'hanhnhan.png',
        'hatde.png',
        'yenmach.png',
        'decuoi.png'
    ]; 
    const totalNuts = 100; 

    for (let i = 0; i < totalNuts; i++) {
        const nut = document.createElement('img');
        nut.classList.add('falling-nut');
        
        nut.src = nutImages[Math.floor(Math.random() * nutImages.length)];
        nut.alt = "nut";
        
        nut.style.left = Math.random() * 100 + '%';
        
        nut.style.animationDelay = Math.random() * 7 + 's';
        
        const randomSize = Math.random() * 20 + 50;
        nut.style.width = randomSize + 'px';
        nut.style.height = 'auto';

        container.appendChild(nut);
    }

    setTimeout(() => {
        container.remove();
    }, 5000);
});