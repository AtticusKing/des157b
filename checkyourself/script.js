(function() {
    'use strict';
    
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("datasection");
    const aboutButton = document.getElementById("abouticon");
    const homeButton = document.getElementById("homeicon");
    const backButton = document.getElementById("backicon");

    const mondayheader = document.getElementById("danceheader");
    const tuesdayheader = document.getElementById("hiphopheader");
    const wednesdayheader = document.getElementById("popheader");
    const thursdayheader = document.getElementById("orchestraheader");
    const fridayheader = document.getElementById("rockheader");

    const mondaybox = document.getElementById("mondaybox");
    const tuesdaybox = document.getElementById("tuesdaybox");
    const wednesdaybox = document.getElementById("wednesdaybox");
    const thursdaybox = document.getElementById("thursdaybox");
    const fridaybox = document.getElementById("fridaybox");

    backButton.addEventListener("click", function() {
        window.history.back();
        backButton.classList.add("graybutton");
        aboutButton.classList.remove("graybutton");
        homeButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");
    });

    section3.classList.add("hidden");
    section4.classList.add("hidden");
    homeButton.classList.add("graybutton");

    aboutButton.addEventListener("click", function() {
        // Hide section2
        section2.classList.add("hidden");
        section4.classList.add("hidden");
        // Show section3
        section3.classList.remove("hidden");

        aboutButton.classList.add("graybutton");
        homeButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");

    });

    homeButton.addEventListener("click", function() {
        // Hide section2
        section3.classList.add("hidden");
        section4.classList.add("hidden");
        // Show section3
        section2.classList.remove("hidden");

        homeButton.classList.add("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");
    });



    const makePlaylist = document.getElementById("newplaylist");

    makePlaylist.addEventListener("click", function() {
        
        alert("Sorry, this feature is under construction.");
    });





    mondaybox.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.add("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = '';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = 'none';
    });

    tuesdaybox.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.add("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = '';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = 'none';
    });

    wednesdaybox.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.add("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = '';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = 'none';
    });

    thursdaybox.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.add("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = '';
        fridayheader.style.display = 'none';
    });

    fridaybox.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.add("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = '';
    });




    




    const dancebutton = document.getElementById("dancebutton");
    const hiphopbutton = document.getElementById("hiphopbutton");
    const popbutton = document.getElementById("popbutton");
    const orchestrabutton = document.getElementById("orchestrabutton");
    const rockbutton = document.getElementById("rockbutton");
    const datapage = document.getElementById("data");


    dancebutton.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.add("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = '';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = 'none';
    });

    hiphopbutton.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.add("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = '';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = 'none';
    });

    popbutton.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.add("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = '';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = 'none';
    });

    orchestrabutton.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.add("graybutton");
        fridaybox.classList.remove("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = '';
        fridayheader.style.display = 'none';
    });

    rockbutton.addEventListener("click", function() {
        section3.classList.add("hidden");
        section2.classList.add("hidden");
        
        section4.classList.remove("hidden");

        homeButton.classList.remove("graybutton");
        aboutButton.classList.remove("graybutton");
        backButton.classList.remove("graybutton");

        mondaybox.classList.remove("graybutton");
        tuesdaybox.classList.remove("graybutton");
        wednesdaybox.classList.remove("graybutton");
        thursdaybox.classList.remove("graybutton");
        fridaybox.classList.add("graybutton");

        mondayheader.style.display = 'none';
        tuesdayheader.style.display = 'none';
        wednesdayheader.style.display = 'none';
        thursdayheader.style.display = 'none';
        fridayheader.style.display = '';

    });










    


   
    async function init() {
        const response = await fetch('data/songs.json');
        const songsData = await response.json();

        if (!songsData) {
            console.error('Failed to fetch song data.');
            return;
        }

        // Add event listeners to each day box
        mondaybox.addEventListener('click', () => displayPlaylist('monday', songsData));
        tuesdaybox.addEventListener('click', () => displayPlaylist('tuesday', songsData));
        wednesdaybox.addEventListener('click', () => displayPlaylist('wednesday', songsData));
        thursdaybox.addEventListener('click', () => displayPlaylist('thursday', songsData));
        fridaybox.addEventListener('click', () => displayPlaylist('friday', songsData));

        dancebutton.addEventListener('click', () => displayPlaylist('monday', songsData));
        hiphopbutton.addEventListener('click', () => displayPlaylist('tuesday', songsData));
        popbutton.addEventListener('click', () => displayPlaylist('wednesday', songsData));
        orchestrabutton.addEventListener('click', () => displayPlaylist('thursday', songsData));
        rockbutton.addEventListener('click', () => displayPlaylist('friday', songsData));
    }

    function displayPlaylist(day, songsData) {
        const dataContainer = document.getElementById('data');
        const playlist = songsData[day];

        if (!playlist) {
            console.error('Playlist data not found for', day);
            return;
        }

        // Clear previous data
        dataContainer.innerHTML = '';

        // Display playlist data
        playlist.forEach(song => {
            const songHTML = `
                <div id="line">
                    <img src="${song.image}">
                    <p class="title">${song.title}</p>
                    <p class="artist">${song.artist}</p>
                    <p class="album">${song.album}</p>
                    <p class="time">${song.runtime}</p>
                </div>
            `;
            dataContainer.innerHTML += songHTML;
        });
    }

    init();




})();