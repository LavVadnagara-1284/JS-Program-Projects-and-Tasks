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