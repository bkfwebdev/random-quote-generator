var targetURL = "http://quotes.rest/qod.js";
const request = require('request');
 request(targetURL, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body)
  
});
