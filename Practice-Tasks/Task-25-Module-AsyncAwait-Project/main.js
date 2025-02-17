import { getData as importedData } from "./library.js";
const container = document.getElementById("user-data");
container.style.display = "none";
const getDataBtn = document.getElementById("getDataBtn");

async function displayData() {
    const userData = await importedData();

    container.style.display = "block"; // Show the container with fetched data
    container.innerHTML = ""; // Clear previous data if any

    getDataBtn.style.display = "none";

    let loaderCircle = document.createElement("div");
    loaderCircle.className = "loader";
    container.appendChild(loaderCircle);

    if (userData) {
        setTimeout(() => {
            displayDataCard(container, userData);
            loaderCircle.remove();
        }, 2000)
    } else {
        showErrorMessage(container)
    }
}

getDataBtn.addEventListener('click', displayData);

function createElement(tag, id, text = '') {
    let element = document.createElement(tag);
    if (id) element.id = id;
    if (text) element.textContent = text;
    return element;
}

function displayDataCard(container, userData) {
    let cardName = createElement('h2', 'card-name', userData.name || 'No name found');
    let cardImage = createElement('img', 'card-img')
    cardImage.src = userData.avatar_url || "";
    cardImage.alt = "GitHub Profile Avatar"

    let cardTable = document.createElement('table');
    cardTable.id = 'cardData-table'
    cardTable.innerHTML = `
        <tr>
            <th>Username</th>
            <td>${userData.login || "No name found"}</td>
        </tr>
        <tr>
            <th>Git Repos</th>
            <td>${userData.public_repos || "No Repositories found"}</td>
        </tr>
        <tr>
            <th>Bio</th>
            <td>${userData.bio || "No Bio found"}</td>
        </tr>
    `
    container.append(cardImage, cardName, cardTable);
}

function showErrorMessage(container) {
    container.innerHTML = "";

    let errorMsg = createElement("p", "error-msg", "Failed to load data. Please try again.");
    errorMsg.style.color = "red";

    let retryBtn = createElement("button", "retry-btn", "Retry");
    retryBtn.classList.add("retry-btn");
    retryBtn.onclick = () => location.reload(); // Reload page on click

    container.append(errorMsg, retryBtn);
}