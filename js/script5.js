// initalize variables - including quotes array
// const request = require('request');
var targetURL = "https://talaikis.com/api/quotes/random/";
var displayedQuotes = [];
var usedQuoteIndex = 0;
var selectorIndex = null;
var randomQuote = null;
var tempStorage = null;
var selectedQuote = null;
var quoteConstruct = null;

function makeHttpObject() {
    try {return new XMLHttpRequest();}
    catch (error) {}
    try {return new ActiveXObject("Msxml2.XMLHTTP");}
    catch (error) {}
    try {return new ActiveXObject("Microsoft.XMLHTTP");}
    catch (error) {}
  
    throw new Error("Could not create HTTP request object.");
  }

//-------------------------------------------------------------------------------------------------------------------
// quotes - array of objects for random selection
var quotes = [{
    quote: "If we lose all of our wealth and are only left with love then, indeed, we shall never be poor.",
    author: "Stephen Richards ",
    tags: ["metaphysics", "life"]
}, {
    quote: "You are an aperture through which the universe is looking at and exploring itself.",
    author: "Alan W. Watts ",
    tags: ["metaphysics", "life"]
}, {
    quote: "Perceive that which cannot be seen with the eye.",
    author: "Miyamoto Musashi ",
    tags: ["metaphysics", "life"],
    citation: "A Book of Five Rings",
    year: " 1642"
}, {
    quote: "Some people without brains do an awful lot of talking, don't you think?",
    author: "L. Frank Baum ",
    tags: ["knowledge", "speech "],
    citation: "The Wonderful Wizard of Oz",
    year: " 1900"
}, {
    quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    author: "Isaac Asimov ",
    tags: ["life", "science", "knowledge", "wisdom"]

}, {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein ",
    tags: ["weapons", "war"]

}, {
    quote: "Do not look upon this world with fear and loathing. Bravely face whatever the gods offer.",
    author: "Morihei Ueshiba ",
    tags: ["martial arts", "training", "peace"]

}, {
    quote: "If you love life, don't waste time, for time is what life is made up of.",
    author: "Bruce Lee ",
    tags: ["life", "time"]
}, {
    quote: "Both the man of science and the man of action live always at the edge of mystery, surrounded by it.",
    author: "J. Robert Oppenheimer ",
    tags: ["science", "philosophy"]

}, {
    quote: "Magic is the sole science not accepted by scientists, because they can't understand it.",
    author: "Houdini ",
    tags: ["science", "magic"]

}, {
    quote: "What we observe is not nature itself, but nature exposed to our method of questioning.",
    author: "Werner Heisenberg ",
    tags: ["nature", "observation", "science"]

}, {
    quote: "To seize control over the laws of Mother Nature one must attain self-mastery.",
    author: "Yehuda Berg ",
    citation: "The 72 Names of God: Technology for the Soul",
    year: " 2004"


}, {
    quote: "To hold a people in oppression you have to convince them first that they are supposed to be oppressed.",
    author: "John Henrik Clarke",
    tags: ["oppression", "perception"]
}, {
    quote:"You can do anything but not everything",
    author:"David Allen",
    citation:"Making it all work",
    year:" 2009",
    tags: ["time","life","skill"]
}];

//Added more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" //-- to categorize each quote.

//-------------------------------------------------------------------------------------------------------------------------
function getRandomQuote() {
    //selects a un-used random quote object from the quotes array
    //if all qoutes have been used , select a random used quote
    //getRandomQuote function does not return a duplicate quote until all quotes have been returned once
    if (quotes.length > 0) {
        selectorIndex = Math.floor((Math.random() * quotes.length));
        randomQuote = quotes[selectorIndex];
        //removed selected qoute from list and add it to the list of used quotes
        tempStorage = quotes.splice(selectorIndex, 1);
        displayedQuotes[usedQuoteIndex] = tempStorage[0]; 
        usedQuoteIndex = usedQuoteIndex + 1;
    } else {
        // selectorIndex = Math.floor((Math.random() * displayedQuotes.length));
        // randomQuote = displayedQuotes[selectorIndex];
        randomQuote = getRandomQuote2();
    }
    //returns the randomly selected quote object;
    return randomQuote;
}

function getRandomQuote2 (){
let request = makeHttpObject();
request.open("GET", targetURL, false);
request.send(null);
return(JSON.parse(request.responseText));
}

//-----------------------------------------------------------------------------------------------------------------------------

function changeBackgroundColor() {
  //randomly selects one of 7 colors and changes the background color to that color
    var colorChoices = ["red", "orange", "purple ", "green", "blue", "indigo", "violet"];
    var colorSelector = Math.floor((Math.random() * 6) + 1);
    document.body.style.backgroundColor = colorChoices[colorSelector];
} 

//-----------------------------------------------------------------------------------------------------------------------------

function printQuote() {
  	selectedQuote = getRandomQuote();
  	if (selectedQuote.hasOwnProperty("citation")) {
        //printQuote constructs a string using the different properties of the quote object using the following HTML template: 
        quoteConstruct = "<p class='quote'>" + selectedQuote.quote + "</p>" + "<p class='source'>" + selectedQuote.author + "<span class='citation'>" + selectedQuote.citation + "</span>" + "<span class='year'>" + selectedQuote.year + "</span> </p>";
    } else {
        //printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
        quoteConstruct = "<p class='quote'>" + selectedQuote.quote + "</p> <p class= 'author'>" + selectedQuote.author;
    }

    document.getElementById('quote-box').innerHTML = quoteConstruct;
    //Background color of page changes each time a new quote is displayed
    changeBackgroundColor();
}


//------------------------------------------------------------------------------------------------------------------------------

// event listener for button that generates random quote    
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Refresh the quote after a set amount of time. every 30 seconds
setInterval(printQuote,60000);