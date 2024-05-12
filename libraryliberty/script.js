(function() {
    'use strict';

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    

    window.addEventListener('scroll', function() {
        var scrollPos = window.scrollY;
        var zoomSection = document.getElementById('zoom');
        var scaleFactor = 1 + (scrollPos * 0.0002);
    
        zoomSection.style.transform = 'scale(' + scaleFactor + ')';
    });
    

    const plane = document.getElementsByClassName('plane');
    const leftCity = document.getElementsByClassName('leftCity');
    const rightCity = document.getElementsByClassName('rightCity');
    const crane = document.getElementsByClassName('crane');
    const rightGray = document.getElementsByClassName('rightGray');
    const midGray = document.getElementsByClassName('midGray');
    const leftGray = document.getElementsByClassName('leftGray');
    const roadBehind = document.getElementsByClassName('roadBehind');
    const leftBuilding = document.getElementsByClassName('leftBuilding');
    const rightBuilding = document.getElementsByClassName('rightBuilding');
    const farLeftBuilding = document.getElementsByClassName('farLeftBuilding');
    const farRightBuilding = document.getElementsByClassName('farRightBuilding');
    const roadSidewalk = document.getElementsByClassName('roadSidewalk');
    const leftSidewalk = document.getElementsByClassName('leftSidewalk');
    const rightSidewalk = document.getElementsByClassName('rightSidewalk');
    const building = document.getElementsByClassName('building');
    const rightCar = document.getElementsByClassName('rightCar');
    const leftCar = document.getElementsByClassName('leftCar');
    const leftAlley = document.getElementsByClassName('leftAlley');
    const rightAlley = document.getElementsByClassName('rightAlley');


    new simpleParallax(plane, {
        delay: 7,
        orientation: 'right',
        scale: 1.8,
        overflow: true, 
    });

    new simpleParallax(leftAlley, {
        delay: 1,
        orientation: 'left',
        scale: 4,
        overflow: true,
    });

    new simpleParallax(rightAlley, {
        delay: 1,
        orientation: 'right',
        scale: 4,
        overflow: true,
    });


new simpleParallax(leftCar, {
        delay: 3,
        orientation: 'right',
        scale: 2,
        overflow: true,
    });

    new simpleParallax(rightCar, {
        delay: 4,
        orientation: 'left',
        scale: 2,
        overflow: true,
    });

    new simpleParallax(rightSidewalk, {
        delay: 1,
        orientation: 'right',
        scale: 4.1,
        overflow: true,
    });

    new simpleParallax(leftSidewalk, {
        delay: 1,
        orientation: 'left',
        scale: 4.1,
        overflow: true,
    });

    new simpleParallax(farRightBuilding, {
        /* delay: 0, */
        orientation: 'left',
        scale: 1.2,
        overflow: true,
    });

    new simpleParallax(farLeftBuilding, {
        /* delay: 0, */
        orientation: 'right',
        scale: 1.2,
        overflow: true,
    });

    new simpleParallax(leftBuilding, {
        delay: 1,
        orientation: 'right',
        scale: 1.2,
        overflow: true,
    });

    new simpleParallax(rightBuilding, {
        delay: 2,
        orientation: 'left',
        scale: 1.2,
        overflow: true,
    });

    new simpleParallax(leftCity, {
        delay: 4,
        orientation: 'left',
        scale: 1.1,
        overflow: true,
    });

    new simpleParallax(rightCity, {
        delay: 4,
        orientation: 'right',
        scale: 1.1,
        overflow: true,
    });

    new simpleParallax(crane, {
        delay: 2,
        orientation: 'left',
        scale: 1.2,
        overflow: true,
    });

    new simpleParallax(rightGray, {
        delay: 2,
        orientation: 'right',
        scale: 1.1,
        overflow: true,
    });

    new simpleParallax(midGray, {
        delay: 2,
        orientation: 'left',
        scale: 1.1,
        overflow: true,
    });

    new simpleParallax(leftGray, {
        delay: 2,
        orientation: 'left',
        scale: 1.1,
        overflow: true,
    });

    var shine = new Shine(document.getElementById('title'));

    window.addEventListener('mousemove', function(event) {
        shine.light.position.x = event.clientX;
        shine.light.position.y = event.clientY;
        shine.draw();
      }, false);

})();