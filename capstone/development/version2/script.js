Parse.initialize("QlinQlu8H5CrmhExZ8yoSgWLPjRswng8gQ8yYdh9","ZYjqpdSnuCaNbrpgvljhMuJT5bI347E7V5T51mV8"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

let historyStack = [];
let historyIndex = -1;

function openTab(evt, tabName) {
    showTab(tabName);
    addHistory(tabName);
}

function addHistory(tabName) {
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

    if (historyIndex <= 0) {
        backButton.disabled = true;
        backButton.style.opacity = 0.5;
    } else {
        backButton.disabled = false;
        backButton.style.opacity = 1;
    }

    if (historyIndex >= historyStack.length - 1) {
        forwardButton.disabled = true;
        forwardButton.style.opacity = 0.5;
    } else {
        forwardButton.disabled = false;
        forwardButton.style.opacity = 1;
    }
}

document.addEventListener('DOMContentLoaded', function() {
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

let responses = [];

function submitAIForm(event) {
    event.preventDefault();
    const shortResponse = document.getElementById('short-response').value;
    const aiImpact = document.getElementById('ai-impact').value;
    const opinionChange = document.getElementById('opinion-change').value;
    
    // Clear the input fields
    document.getElementById('short-response').value = '';
    document.getElementById('ai-impact').value = 'positive';
    document.getElementById('opinion-change').value = 'yes';

    responses.push({ shortResponse, aiImpact, opinionChange })