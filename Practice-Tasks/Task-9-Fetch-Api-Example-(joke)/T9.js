var dataView = document.getElementById("dataView");
const getData = async () => {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        dataView.textContent = `Failed to load joke. Please try again. ${error}`;
        return null;
    }
}

const displayData = async () => {
    dataView.textContent = "Loading...";
    const joke = await getData();
    if (joke) {
        dataView.innerHTML = `<p>${joke.setup}</p><p><strong>${joke.punchline}</strong></p>`;
    } else {
        dataView.textContent = "Failed to load joke. Please try again.";
    }
}

document.getElementById("newJokeBtn").addEventListener("click", displayData);
