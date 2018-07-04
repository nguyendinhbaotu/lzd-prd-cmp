const express = require('express')
const app = express()
const port = 9090

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/parse', (req, res) => {
    let url = req.query.url;
    res.json({
        "url": url,
        "title": "Iphone X",
        "price": "1000$"
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))