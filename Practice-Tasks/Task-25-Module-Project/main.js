// import { getData } from "./library.js"; 

// async function displayData() {
//     const userData = await getData(); 
//     if (userData) {
//         console.log(`Name: ${userData.name || "No Name Found"}`);
//         console.log(`Username: ${userData.login || "No Name Found"}`);
//         console.log(`Total Git Repos: ${userData.public_repos || "No Name Found"}`);
//         console.log(`Bio: ${userData.bio || "No bio available."}`);
//     } else {
//         console.log("Failed to fetch data.");
//     }
// }

// displayData();

import { getData } from "./library.js";

async function displayData() {
    const userData = await getData();
    const container = document.getElementById("user-data");

    if (userData) {
        // Display in UI
        container.innerHTML = `
            <p><strong>Name:</strong> ${userData.name || "No Name Found"}</p>
            <p><strong>Username:</strong> ${userData.login || "No Username Found"}</p>
            <p><strong>Total Git Repos:</strong> ${userData.public_repos || "No Data"}</p>
            <p><strong>Bio:</strong> ${userData.bio || "No bio available."}</p>
        `;

        // Console logs with comments
        console.log(`Name: ${userData.name || "No Name Found"}`); // Logs the user's name
        console.log(`Username: ${userData.login || "No Username Found"}`); // Logs the username
        console.log(`Total Git Repos: ${userData.public_repos || "No Data"}`); // Logs total public repositories
        console.log(`Bio: ${userData.bio || "No bio available."}`); // Logs the user’s bio
    } 
    // todo: add btn here
    // else {
    //     container.innerHTML = `<p style="color: red;">Failed to fetch data.</p>`;
    //     console.log("Failed to fetch data."); // Logs failure message
    // }
}

document.getElementById('getDataBtn').addEventListener('click', displayData);
