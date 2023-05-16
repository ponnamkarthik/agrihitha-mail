const axios = require('axios')
const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())
// get json from the request
app.use(express.json())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})


// create post endpoint for mail
app.post('/mail', (req, res) => {
    let data = JSON.stringify(req.body);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.mailjet.com/v3.1/send',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Basic ZjE5N2YwMTIwMTg1ZjM2MTRhMDI3ZjA3MDc1ZmM3N2E6OWYyMzE5NDQ0ZmMzNWI2M2EwYTc4OThiM2JhNmYzYjY='
        },
        data : data
    };

    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
        res.send(response.data)
    })
    .catch((error) => {
        res.status(404).send({"error": error})
    });

})


app.listen(process.env.PORT || 3000)