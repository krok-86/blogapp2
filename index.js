/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT || 3003
const app = express();
// const bodyParser = require('body-parser')

// const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log('Server cant start', err);
        process.exit(1);
    }
    console.log(`Server has been started ${PORT}`);
});