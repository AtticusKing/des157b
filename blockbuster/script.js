(function(){
    'use strict';

    const fs = document.querySelector('.fa-expand');
    const section = document.querySelector('#section');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');

    const intervalID = setInterval(checkTime, 1000);

    const qualityButtons = document.getElementById('qualityButtons');
    const video = document.getElementById('video');

    fs.addEventListener('click', function(){

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });



    function checkTime() {
        if (1 < video.currentTime && video.currentTime < 4){
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }
        if (6 < video.currentTime && video.currentTime < 9) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }
        if (11 < video.currentTime && video.currentTime < 14) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }
        if (16 < video.currentTime && video.currentTime < 19) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }
    }




        qualityButtons.addEventListener('click', function(event) {
if (event.target.classList.contains('qualityBtn')) {
    const selectedQuality = event.target.getAttribute('data-quality');
    let sourceURL = '';

    switch(selectedQuality) {
        case 'high':
            sourceURL = 'media/waves_high.mp4';
            break;
        case 'low':
            sourceURL = 'media/waves_low.mp4';
            break;
        default:
            sourceURL = 'media/waves_high.mp4';
    }
    video.src = sourceURL;
    video.load();
}
});       

})();