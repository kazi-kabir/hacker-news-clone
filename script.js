// arr for storing div
let testObj  = {
   title: "I like to run",
   by : "chiko",
   data: {} 
}

let anotestObj  = {
    title: "Rust is amazing",
    by : "suki",
    data: {} 
 }

let closeToRealHN = {
        by : "dashthedog",
        time : 1175714200,
        title : "My YC app: Dropbox - Throw away your USB drive",
        url : "http://www.getdropbox.com/u/2/screencast.html"
}

let arr = [

];

const URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"; 
const URL_test = "https://hacker-news.firebaseio.com/v0/item/35406369.json?print=pretty";

// move this into sep func
async function logJSONData(URL) {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    const jsonData = await response.json();
    console.log(jsonData);
}

// https://hacker-news.firebaseio.com/v0/item/35406369.json?print=pretty

logJSONData(URL);
logJSONData(URL_test);

let objArray = [testObj, anotestObj, closeToRealHN];

// deconstruct the receiving object
// then push into appropriate variables

function createDivs(arr) {
    console.log('foobar')
    console.log(arr.length)
    
    for(let i = 0; i < arr.length; i++) {
        let divElement = document.createElement("Div");
        divElement.id = "divID"+1;
        
        // abstract this out l8r
        divElement.style.textAlign = "center";
        divElement.style.fontWeight = "bold";
        divElement.style.fontSize = "smaller";
        divElement.style.paddingTop = "15px";
        divElement.style.border = "1px solid black"
    
        // add more to this
        let paragraph = document.createElement("P");
        let text = document.createTextNode(arr[i].title);
        paragraph.appendChild(text);
        divElement.appendChild(paragraph);
        
        let user = document.createElement("P");
        let postedBy = document.createTextNode("posted by " + arr[i].by);
        paragraph.appendChild(user);
        divElement.appendChild(postedBy);

        // is the arr necessary? can i access through other means
        const contentArea = document.getElementsByClassName('contentarea');
        console.log(contentArea);
        contentArea[0].appendChild(divElement);
    }
}


createDivs(objArray);