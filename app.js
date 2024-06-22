const express = require('express');
const axios = require('axios').default;

const app = express();
const port = 3000;

// Middleware to parse URL-encoded form data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Route to handle GET request for form (for testing via browser)
app.get('/', (req, res) => {
  res.send(`
    <form action="/exchange-rate" method="POST">
      <input type="text" name="exchangeFrom" placeholder="Enter the currency you wish to exchange from" />
      <input type="text" name="exchangeTo" placeholder="Enter the currency you wish to exchange to" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle POST request from form-data
app.post('/exchange-rate', (req, res) => {
  const { exchangeFrom, exchangeTo } = req.body;
  console.log(req.body);  
  if (!exchangeFrom | !exchangeTo){
    return res.status(400).json({error: 'Please provide both from and to currency codes.' })
  }
  console.log(exchangeFrom);
  console.log(exchangeTo);
// Replace with your actual API key from a currency conversion service
  const API_URL = 'https://api.apyhub.com/data/convert/currency/multiple';
  const API_KEY =  'APY0ulpBRMyN3tTnvwJcOZwkLsRgO0mIq8f3zh1wnAFY5vuGhW1qUOQFOFIx4uXu78U6n05gG';//'APY0XiRd3eVtVyTwJzgiz8OGoP8W7KwUq0Qx3BYhvOZZPxPiInGUW9ETkaB6rbwFJVTAFsmZaMUmb';
  var options = {
    method: 'POST',
    url: API_URL,
    headers: {
    'Content-Type': 'application/json',
    'apy-token': API_KEY
    },
    data: {source: exchangeFrom, targets:exchangeTo}
  };
axios.request(options)
  .then(function (response) {
    // Log the status code and the data
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    // Send the response data with the status code
    res.status(response.status).json(response.data);
  })
  .catch(function (error) {
    if (error.response.status == '400'){
      res.status(error.response.status).json({error: "Invalid input - either the date is invalid, source or target currencies are not provided as inputs or not valid currency codes are provided."});
    }else if (error.response.status == '401'){
      res.status(error.response.status).json({error: "Required authentication information is either missing or not valid for the resource."});
    }else if (error.response.status == '500'){
      res.status(error.response.status).json({error: "Unexpected error occurs while processing the request."});
    }else{
      res.status(error.response.status).json({error: "Unexpected error occurs while processing the request."});
    }
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});