const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:9001');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.get('/', (req, res) => {
    // Set a cookie directly
    res.cookie('myCookie', 'myValue', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 24 * 60 * 60 * 1000,
        partitioned: true
    });
    res.send('Cookie set!');
});
app.post('/', (req, res) => {
    res.cookie('myCookie', 'myValue', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 24 * 60 * 60 * 1000,
        partitioned: true
    });
    res.send('Cookie set!');
  });
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
