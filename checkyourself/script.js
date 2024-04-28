(function() {
    'use strict';
    
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("datasection");
    const aboutButton = document.getElementById("abouticon");
    const homeButton = document.getElementById("homeicon");
    const backButton = document.getElementById("backicon");

    backButton.addEventListener("click", function() {
        window.history.back();
        backButton.classList.add("graybutton");
        aboutButton.classList.remove("graybutton");
        homeButton.classList.remove("graybutton");
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
    });



    const makePlaylist = document.getElementById("newplaylist");

    makePlaylist.addEventListener("click", function() {
        
        alert("Sorry, this feature is under construction.");
    });





    const mondaybox = document.getElementById("mondaybox");
    const tuesdaybox = document.getElementById("tuesdaybox");
    const wednesdaybox = document.getElementById("wednesdaybox");
    const thursdaybox = document.getElementById("thursdaybox");
    const fridaybox = document.getElementById("fridaybox");

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
    });




    


})();