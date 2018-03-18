var targetURL = "https://talaikis.com/api/quotes/random/";
function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}
console.log(typeof(makeHttpObject()));

const https = makeHttpObject();
 
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
