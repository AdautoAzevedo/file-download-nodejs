const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/download', (req, res) => {
    const imagePath = path.join(__dirname, 'download', 'example.jpg');

    const fileName = 'example.jpg';

    res.download(imagePath, fileName, (error)=> {
        if (error) res.status(404).send('File not found');
    });
});

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});