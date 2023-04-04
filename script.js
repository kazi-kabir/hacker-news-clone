const URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"; 
const URL_test = "https://hacker-news.firebaseio.com/v0/item/35406369.json?print=pretty";

// move this into sep func
async function logJSONData(URL) {
    const response = await fetch(URL);
    const jsonData = await response.json();
    console.log(jsonData);
}

// https://hacker-news.firebaseio.com/v0/item/35406369.json?print=pretty

logJSONData(URL);
let newobj = logJSONData(URL_test);

let objArray = [newobj];

function loopThroughPosts(arr) {
    let postArr = []
    for(let x = 0; x < arr.length; i++) {
        arr[x] = "https://hacker-news.firebaseio.com/v0/item/"+arr[x]+".json?print=pretty";
        postArr.push(arr[x])
    }

    return postArr;
}



// deconstruct the receiving object
// then push into appropriate variables
// figure out how to retrieve data from objarray
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
        let text = document.createTextNode(arr[i]);
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