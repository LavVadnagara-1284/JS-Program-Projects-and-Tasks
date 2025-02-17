const dataView = document.getElementById("dataView");
const getBtn = document.getElementById("newJokeBtn");
// let isFetching = false; // prevent multiple clicks

const getData = async () => {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch {
        return { setup: "Failed to load joke.", punchline: "Please try again later!" };
    }
}

const displayData = async () => {
    // if (isFetching) return; // prevent multiple clicks
    // isFetching = true; // set flag to true to prevent multiple clicks during fetch operation
    dataView.style.display = 'block'
    dataView.innerHTML = `<p class="loading">Loading...</p>`;
    const joke = await getData();
    dataView.innerHTML = `<p>${joke.setup}</p><p><strong>${joke.punchline}</strong></p>`;
    // isFetching = false; // set flag to false to allow new click
}

getBtn.addEventListener("click", displayData);
