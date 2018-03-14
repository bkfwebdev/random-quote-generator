var targetURL = "https://talaikis.com/api/quotes/random/";
const request = require('request');
 request(targetURL, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body);
  // console.log(typeof(body));
  // console.dir(body);
  console.log(body.quote);
  // console.log(typeof(body));
  // console.log(body.contents.quotes[0].quote);
});