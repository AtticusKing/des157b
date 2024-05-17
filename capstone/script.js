window.onload = function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const images = mainContent.getElementsByTagName('img');
    let loadedImagesCount = 0;
    const totalImages = images.length;

    function checkImagesLoaded() {
        for (let i = 0; i < totalImages; i++) {
            if (images[i].complete) {
                loadedImagesCount++;
            }
        }
        if (loadedImagesCount === totalImages) {
            setTimeout(fadeOutWelcomeScreen, 3250); // Wait for at least 3.25 seconds before fading out welcome screen
        } else {
            setTimeout(checkImagesLoaded, 100);
        }
    }

    function fadeOutWelcomeScreen() {
        welcomeScreen.style.transition = 'opacity 2s';
        welcomeScreen.style.opacity = 0;
        welcomeScreen.addEventListener('transitionend', showMainContent);
    }

    function showMainContent() {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 50); // Small delay to ensure display change is applied before fading in
    }

    checkImagesLoaded();
};
