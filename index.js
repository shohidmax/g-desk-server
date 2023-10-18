const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;




app.use(cors());


app.get('/heroku', (req, res) => {
    res.send('sihab prem kore lukaya lukaya paser basai')
})


//ekhane order korte hoy


// listening
app.listen(port, () => {
    console.log('ha kaka ami lukaya prem korsi ekhane', port);
})
