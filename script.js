// arr for storing div
let testObj  = {
   title: "This cool hack",
   user: "fooForever",
   data: {} 
}

let anotestObj  = {
    title: "Rust is amazing",
    user: "fooForever",
    data: {} 
 }

let arr = [

];

let objArray = [testObj, anotestObj];

// deconstruct the receiving object
// then push into appropriate variables

function createDivs(arr) {
    console.log('foobar')
    console.log(arr.length)
    
    for(let i = 0; i < arr.length; i++) {
        var divElement = document.createElement("Div");
        divElement.id = "divID"+1;
        
        // abstract this out l8r
        divElement.style.textAlign = "center";
        divElement.style.fontWeight = "bold";
        divElement.style.fontSize = "smaller";
        divElement.style.paddingTop = "15px";
        divElement.style.border = "1px solid black"
    
        // add more to this
        var paragraph = document.createElement("P");
        var text = document.createTextNode(arr[i].title);
        paragraph.appendChild(text);
        divElement.appendChild(paragraph);
    
        // is the arr necessary? can i access through other means
        const contentArea = document.getElementsByClassName('contentarea');
        console.log(contentArea);
        contentArea[0].appendChild(divElement);
    }
}


createDivs(objArray);