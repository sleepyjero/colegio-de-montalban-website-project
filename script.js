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
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.profiles-track');
  const cards = document.querySelectorAll('.profile-card');
  const prevButton = document.querySelector('.slider-button.prev');
  const nextButton = document.querySelector('.slider-button.next');

  let currentIndex = 0;

  // Function to update the slider position
  function updateSliderPosition() {
    const cardWidth = cards[0].offsetWidth + 30; // Card width + margin
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Event listener for the previous button
  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  // Event listener for the next button
  nextButton.addEventListener('click', function () {
    if (currentIndex < cards.length - 3) { // Only show 3 cards at once
      currentIndex++;
      updateSliderPosition();
    }
  });

  // Initial update to set the first position
  updateSliderPosition();
});
