const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
