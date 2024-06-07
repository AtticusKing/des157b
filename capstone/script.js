Parse.initialize("QlinQlu8H5CrmhExZ8yoSgWLPjRswng8gQ8yYdh9", "ZYjqpdSnuCaNbrpgvljhMuJT5bI347E7V5T51mV8");
Parse.serverURL = 'https://parseapi.back4app.com/';

/* Keeping track of tab history */
let historyStack = [];
let historyIndex = -1;

function openTab(evt, tabName) {
    showTab(tabName);
    addHistory(tabName);
    if (evt) evt.currentTarget.className += " active";
    highlightTab(tabName);
}

function addHistory(tabName) {
    /* Snip off any forward history if we're back in time */
    historyStack = historyStack.slice(0, historyIndex + 1);
    historyStack.push(tabName);
    historyIndex++;
    updateNavButtons();
}

function goBack() {
    if (historyIndex > 0) {
        historyIndex--;
        const tabName = historyStack[historyIndex];
        showTab(tabName);
        highlightTab(tabName);
        updateNavButtons();
    }
}

function goForward() {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        const tabName = historyStack[historyIndex];
        showTab(tabName);
        highlightTab(tabName);
        updateNavButtons();
    }
}

function showTab(tabName) {
    var tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    updateAddressBar(tabName);
    highlightTab(tabName);
}

function updateAddressBar(tabName) {
    const addressBar = document.getElementById('address-bar');
    /* Update the address bar based on the tab name */
    if (tabName === 'search' || tabName === 'results') {
        addressBar.value = `https://www.futuregoogle.com`;
    } else if (tabName === 'article') {
        addressBar.value = `https://www.article.com`;
    } else if (tabName === 'news') {
        addressBar.value = `https://www.news.com`;
    } else if (tabName === 'clock') {
        addressBar.value = `https://www.clock.com`;
    } else if (tabName === 'opinion') {
        addressBar.value = `https://www.opinion.com`;
    } else if (tabName === 'home') {
        addressBar.value = `https://www.home.com`;
    }
}

function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value;
    document.getElementById("results-content").innerText = `Results for: ${query}`;
    showTab('results');
    highlightTab('search');
}

function openSearch() {
    const query = document.getElementById("address-bar").value.replace('https://www.google.com/search?q=', '');
    document.getElementById("search-input").value = query;
    performSearch(new Event('submit'));
}

function reloadPage() {
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
        activeTab.style.display = 'none';
        activeTab.offsetHeight;
        activeTab.style.display = 'block';
    }
}

function highlightTab(tabName) {
    const tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        if (tablinks[i].textContent.toLowerCase().replace(/ /g, '') === tabName || (tabName === 'results' && tablinks[i].textContent.toLowerCase().replace(/ /g, '') === 'search')) {
            tablinks[i].classList.add("active");
        }
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        openSearch();
    }
}

function updateNavButtons() {
    const backButton = document.querySelector('.nav-button[onclick="goBack()"]');
    const forwardButton = document.querySelector('.nav-button[onclick="goForward()"]');

    /* Disable the back button if there's no history to go back to */
    if (historyIndex <= 0) {
        backButton.disabled = true;
        backButton.style.opacity = 0.5;
    } else {
        backButton.disabled = false;
        backButton.style.opacity = 1;
    }

    /* Disable the forward button if there's no history to go forward to */
    if (historyIndex >= historyStack.length - 1) {
        forwardButton.disabled = true;
        forwardButton.style.opacity = 0.5;
    } else {
        forwardButton.disabled = false;
        forwardButton.style.opacity = 1;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.tab-link').click();
    updateAddressBar('search');
    updateNavButtons();
    setTimeout(() => {
        document.getElementById('intro-page').style.display = 'none';
        document.querySelector('.browser').style.display = 'block';
    }, 3000);
});

const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries, observer) {
    entries.forEach((entry) => {
        const elem = entry.target;
        if (entry.intersectionRatio >= threshold) {
            elem.classList.add(ANIMATED_CLASS);
            observer.unobserve(elem);
        } else {
            elem.classList.remove(ANIMATED_CLASS);
        }
    });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
    observer.observe(target);
}

function updateClock() {
    const fakeYear = "2041";
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const date = now.getDate();

    let hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;

    const timeString = `${hour.toString().padStart(2, '0')}:${minute}:${second} ${amPm}`;
    const dateString = `${day, month} ${date}, ${fakeYear}`;

    document.getElementById('clock-display').textContent = timeString;
    document.getElementById('date-display').textContent = dateString;
}

setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', updateClock);

async function submitAIForm(event) {
    event.preventDefault();
    const shortResponse = document.getElementById('short-response').value;
    const aiImpact = document.getElementById('ai-impact').value;
    const opinionChange = document.getElementById('opinion-change').value;

    // Clear the input fields
    document.getElementById('short-response').value = '';
    document.getElementById('ai-impact').value = 'positive';
    document.getElementById('opinion-change').value = 'yes';

    // Save the response to Back4App
    const Response = Parse.Object.extend("Response");
    const response = new Response();

    response.set("shortResponse", shortResponse);
    response.set("aiImpact", aiImpact);
    response.set("opinionChange", opinionChange);

    try {
        await response.save();
        displayResponses();
    } catch (error) {
        console.error('Error while saving response: ', error);
    }

    document.getElementById('overlay').style.display = 'block';
}

async function displayResponses() {
    const Response = Parse.Object.extend("Response");
    const query = new Parse.Query(Response);

    try {
        const results = await query.find();
        const responsesDiv = document.getElementById('responses');
        responsesDiv.innerHTML = '';

        results.forEach(result => {
            const responseDiv = document.createElement('div');
            responseDiv.classList.add('response-card');
            responseDiv.innerHTML = `
                <p><strong>Thoughts:</strong> ${result.get('shortResponse')}</p>
                <p><strong>Impact:</strong> ${result.get('aiImpact')}</p>
                <p><strong>Opinion Changed:</strong> ${result.get('opinionChange')}</p>`;
            responsesDiv.appendChild(responseDiv);
        });
    } catch (error) {
        console.error('Error while fetching responses: ', error);
    }
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    /* Show the browser after the intro page */
    setTimeout(() => {
        document.getElementById('intro-page').style.display = 'none';
        document.querySelector('.browser').style.display = 'block';
    }, 3000);

    /* Back to top functionality */
    const backToTopButton = document.getElementById('back-to-top');
    const timelineSection = document.querySelector('.timeline');

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.innerHeight + window.scrollY;

        /* Check if the user has scrolled to the bottom of the page */
        if (scrollHeight - scrollPosition <= 100) {
            backToTopButton.style.display = 'block';
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 300);
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* Add event listeners to home icons */
    document.getElementById('search-icon').addEventListener('click', function () {
        openTab(null, 'search');
    });
    document.getElementById('article-icon').addEventListener('click', function () {
        openTab(null, 'article');
    });
    document.getElementById('clock-icon').addEventListener('click', function () {
        openTab(null, 'clock');
    });
    document.getElementById('news-icon').addEventListener('click', function () {
        openTab(null, 'news');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const historyButton = document.getElementById('history-button');
    const historyMessage = document.getElementById('history-message');

    const messages = [
        "The world's first cat mayor was elected in a small town in Oregon.",
        "Global 'Bring Your Pet to Work' day led to the biggest productivity drop in history.",
        "A viral dance craze involving penguin waddles swept the globe.",
        "The Great Toilet Paper Shortage sparked a new wave of bidet popularity.",
        "Government AI mistakenly declared all humans as cats, causing bureaucratic chaos.",
        "The first-ever cheese rolling championship on Mars was held.",
        "The accidental discovery of a lost city occured in someone's backyard",
        "Lightning struck twice at the World Cup Final.",
        "A holographic referee was introduced in American Sports.",
        "A streaker disrupted the World Series.",
        "The Drone Racing championship was held in the Grand Canyon.",
        "A blockbuster movie featuring an all-penguin cast broke box office records.",
        "The first interactive movie allowed audiences to choose the plot in real-time.",
        "A comedy show where robots tried stand-up comedy went viral.",
        "The first musical performed entirely by holograms won a Tony Award.",
        "A viral internet challenge involved people impersonating historical figures in modern settings.",
        "A talent show for animals became the most-watched program of the year.",
        "The first quantum computer was integrated into global finance systems.",
        "Artificial Intelligence passed the Turing Test for the first time.",
        "The Mars Colony welcomed its first civilian inhabitants.",
        "The United Nations declared the world's first Global Climate Accord.",
        "The Hyperloop completed its first transcontinental journey.",
        "Electricity was transmitted wirelessly over long distances.",
        "The world's first bionic eye provided sight to the blind.",
        "Self-healing materials revolutionized construction and infrastructure."
    ];

    historyButton.addEventListener('click', function () {
        const now = new Date();

        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        const time = `${hours.toString().padStart(2, '0')}:${minutes} ${amPm}`;

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const randomDay = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];

        const randomYear = Math.floor(Math.random() * (2040 - 2024 + 1)) + 2024;
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        historyMessage.textContent = `At ${time} on ${randomDay} ${randomYear}: ${randomMessage}`;
        historyMessage.style.display = 'block';
    });
});
