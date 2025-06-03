const menuGreeting = "Hello, Odinite! menu";

function createMenu(){
    console.log("CreateMenu")
    const content = document.getElementById("content")
    content.innerHTML = ""

    
    

    const greetingBox = document.createElement("div")
   const  greetingHead = document.createElement("h1")
   const contact = document.createElement("h5")
    greetingHead.innerHTML = "Evil Burger Restaurant Menu"
    contact.innerHTML = "We only accept cash (exact change please)"


    const testimonyBox = document.createElement("div")
    const testimonyHead = document.createElement("h2")
    const testimony = document.createElement("p")

    testimonyHead.innerHTML = "Customer Testimony"
    testimony.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis quis tortor id ultricies. Nunc mollis sit amet lectus eget malesuada. Praesent ac quam id diam congue placerat eget quis orci. Mauris at purus sem. Sed pretium molestie diam, at elementum enim iaculis vel. Cras eget nulla blandit, feugiat nisi a, lacinia justo. Maecenas sit amet pharetra mauris."
    testimonyBox.appendChild(testimonyHead)
    testimonyBox.appendChild(testimony)

    const hoursBox = document.createElement("div")
    
    const hoursHead = document.createElement("h2")
    const hours = document.createElement("ul")
    hoursHead.innerHTML = "Menu"
    const hoursDay = []

    for(let i=0; i<7; i++){
        hoursDay[i] = document.createElement("li")
    }
    hoursDay[0].innerHTML = "Evil Burger - $25"
    hoursDay[1].innerHTML = "Hamburger - $6"
    hoursDay[2].innerHTML = "Cheeseburger - $5.99"
    hoursDay[3].innerHTML = "Hamburger w/Cheese $12"
    hoursDay[4].innerHTML = "Friendburger - 4"
    hoursDay[5].innerHTML = "Fry - $0.04"
    hoursDay[6].innerHTML = "Ketchup Packet - $15"
    for(let i=0; i<7; i++){
       hours.appendChild(hoursDay[i])
    }
    const containerBox = document.createElement("div")
    hoursBox.classList = "contentContainer"
    greetingBox.classList = "contentContainer"
    testimonyBox.classList = "contentContainer"
    hoursBox.appendChild(hoursHead)
    hoursBox.appendChild(hours)

    greetingBox.appendChild(greetingHead)
    greetingBox.appendChild(contact)

    containerBox.appendChild(greetingBox)
   
    containerBox.appendChild(hoursBox)

    
    content.appendChild(containerBox)
}

export{menuGreeting, createMenu}