const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Only the front-end files are public.
// server.js, generate_mcqs.js and the data/ folder stay private.
const PUBLIC_FILES = ['index.html', 'style.css', 'script.js', 'questions.js'];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

PUBLIC_FILES.forEach((file) => {
    app.get('/' + file, (req, res) => {
        res.sendFile(path.join(__dirname, file));
    });
});

app.use(express.json());

// API to get questions
app.get('/api/questions', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'questions.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to load questions' });
        }
        try {
            res.json(JSON.parse(data));
        } catch (parseError) {
            res.status(500).json({ error: 'Questions file is not valid JSON' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});