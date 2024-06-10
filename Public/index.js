document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value;

    if (query.length > 3) {
        fetch(`/search?q=${query}`)
            .then(response => response.json())
            .then(data => {
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = '';

                if (data.length > 0) {
                    data.forEach(item => {
                        const itemDiv = document.createElement('div');
                        itemDiv.classList.add('result-item');
                        itemDiv.textContent = item.name;
                        resultsDiv.appendChild(itemDiv);
                    });
                } else {
                    resultsDiv.textContent = 'No results found';
                }
            });
    } else {
        document.getElementById('results').innerHTML = '';
    }
});
