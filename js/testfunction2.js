var targetURL = "http://quotes.rest/quote/random.json";
const request = require('request');
 request(targetURL, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body)
  // console.log(body.contents.quotes[0].quote);
});
