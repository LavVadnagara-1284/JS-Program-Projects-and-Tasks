const dataView = document.getElementById("dataView");

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        dataView.textContent = `Failed to load data. Please try again. ${error.message}`;
        return null;
    }
}

const displayData = async () => {
    dataView.textContent = "Loading...";

    const userData = await getData();
    if (!userData) return;

    const randomIndex = Math.floor(Math.random() * userData.length);
    const randomUser = userData[randomIndex];

    // dataView.innerHTML = "<h2>User List</h2><ul id='userList'></ul>";
    // const userList = document.getElementById("userList");

    // randomUser.forEach(user => {
    //     dataView.innerHTML += `<li>${user.name} - ${user.email}</li>`;
    // }); 
    // ! - this is not working because of foreach loop.

    dataView.innerHTML = `
                <h2>Random User</h2>
                <ul>
                    <li><strong>Name:</strong> ${randomUser.name}</li>
                    <li><strong>Email:</strong> ${randomUser.email}</li>
                </ul>
            `;
}

document.getElementById("getDataBtn").addEventListener("click", displayData);