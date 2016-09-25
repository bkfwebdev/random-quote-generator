var displayedQuotes = [];
var quotes = [{
    quote: "If we lose all of our wealth and are only left with love then, indeed, we shall never be poor.",
    source: "Stephen Richards ",
    tags: ["metaphysics", "life"]
}, {
    quote: "You are an aperture through which the universe is looking at and exploring itself.",
    source: "Alan W. Watts ",
    tags: ["metaphysics", "life"]
}, {
    quote: "Perceive that which cannot be seen with the eye.",
    source: "Miyamoto Musashi ",
    tags: ["metaphysics", "life"],
    citation: "A Book of Five Rings",
    year: " 1642"
}, {
    quote: "Some people without brains do an awful lot of talking, don't you think?",
    source: "L. Frank Baum ",
    tags: ["knowledge", "speech "],
    citation: "The Wonderful Wizard of Oz",
    year: " 1900"

}, {
    quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    source: "Isaac Asimov ",
    tags: ["life", "science", "knowledge", "wisdom"]

}, {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    source: "Albert Einstein ",
    tags: ["weapons", "war"]

}, {
    quote: "Do not look upon this world with fear and loathing. Bravely face whatever the gods offer.",
    source: "Morihei Ueshiba ",
    tags: ["martial arts", "training", "peace"]

}, {
    quote: "If you love life, don't waste time, for time is what life is made up of.",
    source: "Bruce Lee ",
    tags: ["life", "time"]
}, {
    quote: "Both the man of science and the man of action live always at the edge of mystery, surrounded by it.",
    source: "J. Robert Oppenheimer ",
    tags: ["science", "philosophy"]

}, {
    quote: "Magic is the sole science not accepted by scientists, because they can't understand it.",
    source: "Houdini ",
    tags: ["science", "magic"]

}, {
    quote: "What we observe is not nature itself, but nature exposed to our method of questioning.",
    source: "Werner Heisenberg ",
    tags: ["nature", "observation", "science"]

}, {
    quote: "To seize control over the laws of Mother Nature one must attain self-mastery.",
    source: "Yehuda Berg ",
    citation: "The 72 Names of God: Technology for the Soul",
    year: " 2004"


}, {
    quote: "To hold a people in oppression you have to convince them first that they are supposed to be oppressed.",
    source: "John Henrik Clarke",
    tags: ["oppression", "perception"]
}];

function getRandomQuote(randomQuote) {
    var selectorIndex = null;
    //selects a un-used random quote object from the quotes array
    //if all qoutes have been used , select a random used quote
    if (quotes.length > 0) {
        selectorIndex = Math.floor((Math.random() * quotes.length) + 1);
        randomQuote = quotes[selectorIndex];
        //removed selected qoute from list and add it to the list of used quotes
        displayedQuotes.push(quotes.splice(selectorIndex, 1));
    } else {
        selectorIndex = Math.floor((Math.random() * displayedQuotes.length) + 1);
        randomQuote = displayedQuotes[selectorIndex];
    }
    //returns the randomly selected quote object;
    return randomQuote;
};

function changeBackgroundColor() {
    var colorChoices = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    var colorSelector = Math.floor((Math.random() * 6) + 1);
    document.body.style.backgroundColor = colorChoices[colorSelector];
};

function printQuote() {
    var selectedQuote = getRandomQuote(selectedQuote);
    if ("citation" in selectedQuote) {
        var quoteConstruct = "<p class='quote'>" + selectedQuote.quote + "</p>" + "<p class='source'>" + selectedQuote.source + "<span class='citation'>" + selectedQuote.citation + "</span>" + "<span class='year'>" + selectedQuote.year + "</span> </p>";
    } else {
        var quoteConstruct = "<p class='quote'>" + selectedQuote.quote + "</p> <p class= 'source'>" + selectedQuote.source;
    };

    document.getElementById('quote-box').innerHTML = quoteConstruct;
    changeBackgroundColor();
};
// event listener for button that generates random quote    
document.getElementById('loadQuote').addEventListener("click", printQuote, false);