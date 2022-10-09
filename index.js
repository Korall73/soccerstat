const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res) => {
    res.sendFile('${__dirname}/public/indexedDB.html');
});

app.listen(3001, () => {
    console.log('Приложение слушает порт 3001');
});