// Plain JS version (no import/export since you're not using React/Vue)
const API_BASE_URL = "https://bookappnew.onrender.com"; 

// Example function to make API calls
async function fetchBooks() {
try {
    const response = await fetch(`${API_BASE_URL}/books`);
    return await response.json();
} catch (error) {
    console.error("API Error:", error);
    return []; // Return empty array if request fails
}
}