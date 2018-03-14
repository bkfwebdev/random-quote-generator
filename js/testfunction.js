var targetURL = "https://quotes.rest/qod.json?category=inspire";
const https = require('https');
 
https.get(targetURL, (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.dir(JSON.parse(data));
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
