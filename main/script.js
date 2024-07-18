document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
    const smallPage = document.getElementById('smallPage');
    toggleButton.addEventListener('click', function() {
        if (smallPage.style.display === 'none' || smallPage.style.display === '') {
            smallPage.style.display = 'block';
        } else {
            smallPage.style.display = 'none';
        }
    });
  });
  