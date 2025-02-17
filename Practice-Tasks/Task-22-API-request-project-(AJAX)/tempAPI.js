const tempUserData = {
    avatar_url: "https://avatars.githubusercontent.com/u/9919?v=4",
    name: "Lav Vadnagara (temp)",
    login: "Lav Vadnagara temp 1284",
    public_repos: 27,
    bio: "Hi, I'm Lav Vadnagara, a passionate JavaScript developer constantly exploring new technologies. I enjoy building interactive web applications, optimizing code, and solving real-world problems. Currently, I'm focused on mastering advanced JavaScript concepts and improving my skills through hands-on projects. Let's innovate and create together!"
};

function fetchTempUserData() {
    return new Promise((resolve) => {
        console.log("Fetching data from offline API...");
        setTimeout(() => resolve(tempUserData), 1000); // Simulates network delay
    });
}

function getData() {
    let container = document.getElementById('card');
    container.style.display = 'block';

    let getDataBtn = document.getElementById('getDataBtn');
    getDataBtn.style.display = 'none';

    let loading = document.createElement("p");
    loading.setAttribute('id', 'loading');
    loading.textContent = "Requesting data...";

    let cardImage = document.createElement("img");
    let cardTitle = document.createElement("h2");
    let cardUsername = document.createElement("p");
    let cardGitRepo = document.createElement("p");
    let cardDescription = document.createElement("p");

    container.append(loading, cardTitle, cardImage, cardUsername, cardGitRepo, cardDescription);

    // Simulate API request using the temp module
    fetchTempUserData()
        .then(data => {
            loading.textContent = "";
            cardImage.src = data.avatar_url;
            cardTitle.textContent = data.name || "No Name Found";
            cardUsername.textContent = `Username: ${data.login || "No Username Found"}`;
            cardGitRepo.textContent = `Total Git Repos: ${data.public_repos || "No Repo Data"}`;
            cardDescription.textContent = `Bio: ${data.bio || "No bio available."}`;
        })
        .catch(() => {
            loading.textContent = "Failed to load data. Please try again.";
        });
}

// Attach function to button
document.getElementById("getDataBtn").onclick = getData;
