// arr for storing div
let arr = [];

function createDivs(num) {
    console.log('foobar')
    
    for(let i = 0; i < num; i++) {
        var divElement = document.createElement("Div");
        divElement.id = "divID"+1;
        console.log(num);
        
        // abstract this out l8r
        divElement.style.textAlign = "center";
        divElement.style.fontWeight = "bold";
        divElement.style.fontSize = "smaller";
        divElement.style.paddingTop = "15px";
        divElement.style.border = "1px solid black"
    
        // add more to this
        var paragraph = document.createElement("P");
        var text = document.createTextNode("Another paragraph, yay! This one will be styled different from the rest since we styled the DIV we specifically created.");
        paragraph.appendChild(text);
        divElement.appendChild(paragraph);
    

        // is the arr necessary? can i access through other means
        const contentArea = document.getElementsByClassName('contentarea');
        console.log(contentArea);
        contentArea[0].appendChild(divElement);
        arr.push(divElement);
    }
}


createDivs(10);