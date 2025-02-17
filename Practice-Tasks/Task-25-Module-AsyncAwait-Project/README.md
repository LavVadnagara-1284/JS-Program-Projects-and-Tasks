# GitHub User Info

## Project Overview
This project fetches and displays GitHub user information using the GitHub API. It is built with **HTML, CSS, and JavaScript (ES6 Modules)**.

## Features
- Fetches GitHub user data asynchronously.
- Displays user details such as name, username, repositories, and bio.
- Includes a **loading animation** before displaying data.
- Implements **error handling** with a retry option.
- Uses **ES6 Modules** for better code organization.

---

## Project Structure
```
📂 Project Folder
│── index.html
│── style.css
│── main.js
│── library.js
```

---

## Technologies Used
- **HTML** - Structure
- **CSS** - Styling
- **JavaScript** - Logic & API handling
- **GitHub API** - Fetching user data

---

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/github-user-info.git
   ```
2. Navigate to the project folder:
   ```sh
   cd github-user-info
   ```
3. Open `index.html` in a browser.

---

## Code Breakdown

### `index.html`
This is the main HTML file containing the structure of the project.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module Project</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="container">
        <h2>GitHub User Info</h2>
        <div id="user-data"></div>
        <button id="getDataBtn" type="submit">Get data</button>
    </div>

</body>
<script type="module" src="./main.js"></script>

</html>
```

### `library.js`
This file contains an **asynchronous function** to fetch GitHub user data.
```js
export async function getData() {
    try {
        const response = await fetch("https://api.github.com/users/LavVadnagara-1284");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
```

### `main.js`
This file handles fetching data, updating the DOM, and error handling.
```js
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

    // if (userData) {
    //     container.innerHTML = `
    //         <p><strong>Name:</strong> ${userData.name || "No Name Found"}</p>
    //         <p><strong>Username:</strong> ${userData.login || "No Username Found"}</p>
    //         <p><strong>Total Git Repos:</strong> ${userData.public_repos || "No Data"}</p>
    //         <p><strong>Bio:</strong> ${userData.bio || "No bio available."}</p>
    //     `;

    //     console.log(`Name: ${userData.name || "No Name Found"}`);
    //     console.log(`Username: ${userData.login || "No Username Found"}`);
    //     console.log(`Total Git Repos: ${userData.public_repos || "No Data"}`);
    //     console.log(`Bio: ${userData.bio || "No bio available."}`);
    // } else {
    //     container.innerHTML = `<p style="color: red;">Failed to fetch data.</p>`;
    //     console.log("Failed to fetch data.");
    // }

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
```

### `style.css`
This file styles the UI.
```css
/* body {
    font-family: monospace;
    text-align: center;
    margin: 50px;
    background-color: #212121;
    color: white;
} */

/* #container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: auto;
} */

/*
#user-data {
    color: black;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 25rem;
    margin: auto;
}

.loader {
    border: 0.25rem solid #f3f3f3;
    border-top: 0.25rem solid #007bff;
    border-radius: 50%;
    width: 1.875rem;
    height: 1.875rem;
    animation: spin 1s linear infinite;
    margin: 0.625rem auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 10px;
}

h2 {
    margin: 10px 0;
}

#getDataBtn {
    margin: 0.625rem;
    padding: 0.625rem 1.25rem;
    border: none;
    background: #007bff;
    color: #fff;
    font-size: 1rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        background: #0056b3;
    }
} */

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #212121;
    color: white;
}

/* Container */
#container {
    background: #fff;
    padding: 1.5rem;
    border-radius: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 50px auto;
    transition: all 0.3s ease-in-out;
}

/* Title */
h2 {
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 10px;
}

/* User Data Container */
#user-data {
    color: white;
    background: #212121;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

/* Profile Image */
/* #card-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
} */

/* iOS-Style Avatar */
img {
    width: fit-content;
    height: auto;
    padding: 5px 5px 0px 5px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
}

/* User Name */
#card-name {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
}

/* Table Container */
#cardData-table {
    margin-top: 15px;
    border: 1px solid white;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(30, 30, 30, 0.8);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    /* border-collapse: collapse; */
    border-collapse: separate;
    border-spacing: 0;
}

/* Table Header */
#cardData-table th {
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    padding: 14px;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    text-transform: uppercase;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

/* Table Rows */
#cardData-table td {
    text-align: left;
    font-size: 1rem;
    padding: 14px;
    color: #ddd;
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Make Table Responsive */
@media (max-width: 480px) {

    #cardData-table th,
    #cardData-table td {
        font-size: 0.9rem;
        padding: 12px;
    }
}

/* Button */
#getDataBtn,
.retry-btn {
    margin-top: 20px;
    padding: 12px 20px;
    border: none;
    background: #007aff;
    color: white;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
}

#getDataBtn:hover,
.retry-btn:hover {
    background: #005ecb;
}

/* Loader Animation */
.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007aff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Error Message */
#error-msg {
    color: #d9534f;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 10px;
}

/* Retry Button */
.retry-btn {
    display: block;
    margin: 15px auto;
    background: #ff3b30;
}

.retry-btn:hover {
    background: #d32f2f;
}
```

---

## How It Works
1. Click the **Get Data** button.
2. The app fetches GitHub user info and displays it.
3. If the request fails, an error message with a retry button appears.

---

## Future Improvements
- Allow users to search for any GitHub username.
- Display more details like followers, following, etc.
- Improve UI with animations and better layout.


