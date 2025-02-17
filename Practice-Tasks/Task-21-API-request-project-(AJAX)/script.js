function getData() {

    let container = document.getElementById('card')
    container.innerHTML = ''; // Clear previous contents if any 

    let getDataBtn = document.getElementById('getDataBtn')
    getDataBtn.style.display = 'none'

    let loader = document.createElement("div");
    loader.className = "loader";
    container.appendChild(loader);
    container.style.display = 'block'

    // let cardImage = document.createElement("img");
    // cardImage.setAttribute('id', 'card-image');
    // cardImage.alt = "GitHub Profile Image";
    // let cardTitle = document.createElement("h2");
    // cardTitle.setAttribute('id', 'card-title');
    // let cardUsername = document.createElement("p");
    // cardUsername.setAttribute('id', 'card-username');
    // let cardGitRepo = document.createElement("p");
    // cardGitRepo.setAttribute('id', 'card-gitrepo');
    // let cardDescription = document.createElement("p");
    // cardDescription.setAttribute('id', 'card-description');
    // container.append(loading, cardImage, cardTitle, cardUsername, cardGitRepo, cardDescription);

    const requestUrl = 'https://api.github.com/users/LavVadnagara-1284'
    console.log("Requesting data...");

    // loading.textContent = "Requesting data...";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)

    xhr.onreadystatechange = function () {
        console.log(`Ready State: ${xhr.readyState}`);

        if (xhr.readyState === 4) {
            loader.remove();
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);

                // Update UI with API data
                // loading.textContent = "";
                // cardImage.src = data.avatar_url ?? "";
                // cardTitle.textContent = data.name ?? "No Name Found";
                // cardUsername.textContent = `Username: ${data.login ?? "No Username Found"}`;
                // cardGitRepo.textContent = `Total Git Repos: ${data.public_repos ?? "No Repo Data"}`;
                // cardDescription.textContent = `Bio: ${data.bio ?? "No bio available."}`;
                // container.removeChild(loader);

                setTimeout(() => {
                    displayProfileCard(container, data);
                }, 500);

            } else {
                // container.removeChild(loader);
                // loading.textContent = "Failed to load data. Please try again.";
                console.error(`Failed to load data. Status: ${xhr.status}`);
                showErrorMessage(container);
            }
        }
    };
    xhr.send();
}

document.getElementById('getDataBtn').addEventListener('click', getData);

function createElement(tag, id, text = '') {
    let element = document.createElement(tag);
    if (id) element.id = id;
    if (text) element.textContent = text;
    return element;
}

function displayProfileCard(container, data) {
    let cardTitle = createElement("h2", "card-title", data.name || "No Name Found");

    let cardImage = createElement("img", "card-image");
    cardImage.src = data.avatar_url || "";
    cardImage.alt = "GitHub Profile Image";

    let cardUsername = createElement("p", "card-username", `Username: ${data.login || "No Username Found"}`);
    let cardGitRepo = createElement("p", "card-gitrepo", `Total Git Repos: ${data.public_repos || "No Repo Data"}`);
    let cardDescription = createElement("p", "card-description", `Bio: ${data.bio || "No bio available."}`);

    container.append(cardTitle, cardImage, cardUsername, cardGitRepo, cardDescription);
}

// Function to show an error message with a retry button
function showErrorMessage(container) {
    let errorMsg = createElement("p", "error-msg", "Failed to load data. Please try again.");
    let retryBtn = createElement("button", "retry-btn", "Retry");

    retryBtn.classList.add("retry-btn");
    retryBtn.onclick = () => location.reload(); // Reload page on click

    container.append(errorMsg, retryBtn);
}