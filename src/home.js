const greeting = "Hello, Odinite!";

function createHome(){
    console.log("CreateHome")
    
    

    greetingBox = document.createElement("div")
    greetingHead = document.createElement("h1")
    greetingHead.innerHTML = "Wencome to Burger Restaurant"

}

export{greeting, createHome}