const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

// get json from the request
app.use(express.json())

// create post endpoint for mail
app.post('/mail', (req, res) => {
    console.log(req.body)
    console.log("Just got a request!")
    res.send('Yo!')
})

app.post('/mail', (req, res) => {
    console.log(req.body)
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)