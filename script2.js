(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const h1 = document.getElementById('h1');
    const homeis = document.getElementById('homeis');
    const title = document.getElementById('title');

    const brownMainSections = document.querySelectorAll('.brownmain');

    const footer = document.querySelector('footer');

    
    let mode = 'dark';

    button.addEventListener('click', function() {
        
        if (mode === 'dark') {
            button.classList.remove('buttonbrown');
            button.classList.add('buttonblue');
            body.classList.remove('pastbody');
            body.classList.add('futurebody');

            h1.classList.remove('h1brown');
            h1.classList.add('h1white');
            homeis.classList.remove('homeis1');
            homeis.classList.add('homeis2');
            title.classList.remove('pasttitle');
            title.classList.add('futuretitle');
            title.textContent = "The Future";


            brownMainSections.forEach(section => {
                section.classList.toggle('brownmain');
                section.classList.toggle('bluemain');
            });


            footer.classList.remove('footerbrown');
            footer.classList.add('footerblue');
            
            

            mode = 'light';


        } else if (mode === 'light') {
            button.classList.remove('buttonblue');
            button.classList.add('buttonbrown');
            body.classList.remove('futurebody');
            body.classList.add('pastbody');
            
            h1.classList.remove('h1white');
            h1.classList.add('h1brown');
            homeis.classList.remove('homeis2');
            homeis.classList.add('homeis1');
            title.classList.remove('futuretitle');
            title.classList.add('pasttitle');
            title.textContent = "The Past";


            brownMainSections.forEach(section => {
                section.classList.toggle('brownmain');
                section.classList.toggle('bluemain');
            });


            footer.classList.remove('footerblue');
            footer.classList.add('footerbrown');


            mode = 'dark';
        }
    });
})();
