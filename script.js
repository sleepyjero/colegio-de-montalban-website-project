function mockLogin() {
    const name = document.getElementById('name').value;
    const studentNumber = document.getElementById('student-number').value;
    const course = document.getElementById('course').value;
    const section = document.getElementById('section').value;

    if (name && studentNumber && course && section) {
        alert("It's a prank! This is a mock website. Thanks for trying it out!");
    } else {
        alert('Please fill out all fields.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.profiles-track');
    const cards = document.querySelectorAll('.profile-card');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    
    let currentIndex = 0;
    
    function getCardWidth() {
        const card = cards[0];
        const style = window.getComputedStyle(card);
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        return card.offsetWidth + gap;
    }
    
    function getMaxIndex() {
        const visibleCards = Math.floor(track.parentElement.offsetWidth / getCardWidth());
        return Math.max(0, cards.length - visibleCards);
    }
    
    function updateSliderPosition() {
        const cardWidth = getCardWidth();
        const maxIndex = getMaxIndex();
        
        let offset = currentIndex * cardWidth;
        
        if (currentIndex >= maxIndex) {
            offset = (cards.length - visibleCards) * cardWidth;
        }
        
        track.style.transform = `translateX(-${offset}px)`;
    }
    
    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateSliderPosition();
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, getMaxIndex());
        updateSliderPosition();
    });
    
    updateSliderPosition();
});
