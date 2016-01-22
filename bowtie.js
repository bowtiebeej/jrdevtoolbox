window.onload = function () {
    AirClear();
    ContentComing();
    Smelly();
}

//Creates Header text and top navigation menu
//Function name because it is the header so airhead and clear headed...also the footer is called Smelly
function AirClear() {
    var tophat = document.createElement("div");
    tophat.className = "col-md-12 banner";

//site title and subtitle
    tophat.innerHTML = "\<h1\> The Junior Developer Toolbox\</h1\>\<h3\>Tools Every Junior Developer Should Know\<\/h3\>"

    document.getElementById("banner").appendChild(tophat);

    var menuMain = document.createElement("ul");

    menuMain.className = "nav navbar-nav";

//main navigation menu
    menuMain.innerHTML = "\<li\>\<a class=\"homenav\" href=\"index.html\"\>Home\</a\>\</li\>                \<li\>\<a class=\"aboutnav\" href=\"about.html\"\>About\</a\>\</li\>                \<li\>\<a class=\"blognav\" href=\"blog.html\"\>Blog\</a\>\</li\>                \<li\>\<a class=\"toolsnav\" href=\"tools.html\"\>Tools\</a\>\</li\>                \<li\>\<a class=\"learningnav\" href=\"learning.html\"\>Learning\</a\>\<\/li\>\<li class=\"search\"\>\<gcse:search\>\<\/gcse:search\>\<\/li\>";

    document.getElementById("top-menu").appendChild(menuMain);

}

//Underconstruction Content to use add div with id="contenttocome" to html body
function ContentComing() {
    var beHereSoon = document.createElement("div");
    beHereSoon.className = "comingsoon col-md-12";

    beHereSoon.innerHTML = " \<h2\>Content Coming Soon!\<\/h2\>\<br \/\>\<p\>Be on the look out for content related to development specific to junior developers and helping them have the tools they need. In the meantime check out \<a href=\"http:\/\/bowtiebeej.com\"\>BowTie Beej Blog\<\/a\> for posts about learning web development and the journey of a junior developer or listen to \<a href=\"http:\/\/completedeveloperpodcast.com\"\>Complete Developer Podcast\<\/a\>.\<\/p\>";

    document.getElementById("contenttocome").appendChild(beHereSoon);
}

//Footer with copyright to current year
//Function name because well feet stink
//Link to Impressum to come later
function Smelly() {
    var feet = document.createElement("div");
    var startYearCDP = 2015;
    //var startYearBTB = 2015; I should remove this because it's not needed in the current situation
    var startYearJDT = 2016;

    var now = new Date;
    var theYear = now.getYear();
    if (theYear < 1900)
        theYear = theYear + 1900;

    feet.className = "copyright";

    switch (CheckDate(theYear, startYearCDP, feet), CheckDate(theYear, startYearJDT, feet)) {
        case true, true:
            NextYearBoth(feet, theYear);
            break;
        case true, false:
            NextYearCDP(feet, theYear);
            break;
        default:
            CurrentYear(feet, theYear);
    }
}

//Checks the current year against the start year and returns true if current year is later than start year
function CheckDate(theYear, startYear, feet) {
    if (theYear > startYear)
        return true;
    else return false;
}

//Footer information if both CDP and JDT are past start year
function NextYearBoth(feet, theYear) {
    feet.innerHTML = "\<h5\>\&copy 2016 - " + theYear + " Junior Developer Toolbox. All Rights Reserved. \<br \/\>A Member of the Complete Developer Family \&copy 2015 - " + theYear + " \<a href=\"http:\/\/completedeveloperpodcast.com\" \> \<img class=\"CDPlogo\" src= \"http:\/\/completedeveloperpodcast.com\/wp-content\/uploads\/2015\/09\/JPEG300_iTunes.jpg\" \> Complete Developer Podcast\<\/a\>. All rights reserved.\<\/h5 \> ";
    document.getElementById("footer").appendChild(feet);
}

//Footer information of CDP only past start year
function NextYearCDP(feet, theYear) {
    feet.innerHTML = "\<h5\>\&copy 2016 Junior Developer Toolbox. All Rights Reserved. \<br \/\>A Member of the Complete Developer Podcasting Family \&copy 2015 - " + theYear + " \<a href=\"http:\/\/completedeveloperpodcast.com\" \> \<img class=\"CDPlogo\" src= \"http:\/\/completedeveloperpodcast.com\/wp-content\/uploads\/2015\/09\/JPEG300_iTunes.jpg\" \> Complete Developer Podcast\<\/a\>. All rights reserved.\<\/h5 \> ";
    document.getElementById("footer").appendChild(feet);
}

//Not really necessary but it felt wrong leaving it out. Maybe because I want this to become a template for later use but I had to have one if both returned false from CheckDate
function CurrentYear(feet, theYear) {
    feet.innerHTML = "\<h5\>\&copy 2016 Junior Developer Toolbox. All Rights Reserved. \<br \/\> A Member of the Complete Developer Family \&copy 2015 - " + theYear + " \<a href=\"http:\/\/completedeveloperpodcast.com\" \> \<img class=\"CDPlogo\" src= \"http:\/\/completedeveloperpodcast.com\/wp-content\/uploads\/2015\/09\/JPEG300_iTunes.jpg\" \> Complete Developer Podcast\<\/a\>. All rights reserved.\<\/h5 \> ";
    document.getElementById("footer").appendChild(feet);
}