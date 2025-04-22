// 在SearchApp类中添加：
setupSearchSuggestions() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', async (e) => {
        const query = e.target.value;
        if (query.length > 2) {
            const suggestions = await this.fetchSuggestions(query);
            this.showSuggestions(suggestions);
        }
    });
}

async fetchSuggestions(query) {
    const response = await fetch(
        `https://suggestqueries.google.com/complete/search?client=firefox&q=${query}`
    );
    const data = await response.json();
    return data[1];
}