const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Sample data
const clothes = [
    { id: 1, name: 'Red T-Shirt' },
    { id: 2, name: 'Blue Jeans' },
    { id: 3, name: 'Green Sweater' },
    { id: 4, name: 'Yellow Jacket' },
    { id: 5, name: 'Black Shoes' },
];

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Search endpoint
app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = clothes.filter(item => item.name.toLowerCase().includes(query));
    res.json(results);
});

// Handle root route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
