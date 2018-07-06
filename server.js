const express = require('express')
const request = require('request')
const jsdom = require('jsdom')
const {
  JSDOM
} = jsdom;

const app = express()
const port = 9090

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/parse', (req, res) => {
  let url = req.query.url;
  //   res.json({
  //     "url": url,
  //     "title": "Iphone X",
  //     "price": "1000$"
  //   })

  request({
    uri: url
  }, function (error, response, body) {
    let dom = new JSDOM(body)
    let title = dom.window.document.getElementById('module_product_title_1').textContent
    let priceElements = dom.window.document.querySelectorAll('.pdp-price')
    let price = priceElements && priceElements[0] ? priceElements[0].textContent : ''
    let originPrice = priceElements && priceElements[1] ? priceElements[1].textContent : ''
    let specElements = dom.window.document.querySelectorAll('.key-li');
    console.log(specElements)
    if (specElements && specElements.length) {
        // let specs = specElements.map(specElement => {
        //   let specTitle = specElement.querySelect('.key-title').textContent
        //   let specValue = specElement.querySelect('.key-value').textContent
        //   return {
        //     title: specTitle,
        //     value: specValue
        //   }
        // })
        // console.log(specs)
    }
    // let price = '1000$'
    // console.log(dom.window.document.querySelector('.pdp-price').textContent)

    console.log(title)
    console.log(price)
    res.json({
      url,
      title,
      price,
      originPrice,
    //   specs
    })
    // console.log(body)
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
