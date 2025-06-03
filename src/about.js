const aboutGreeting = "about";

function createAbout(){
    console.log("CreateAbout")
    const content = document.getElementById("content")
    content.innerHTML = ""

    
    

    const greetingBox = document.createElement("div")
   const  greetingHead = document.createElement("h1")
   const contact = document.createElement("h5")
    greetingHead.innerHTML = "About Evil Burger Restaurant"
    contact.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis quis torto"


    const testimonyBox = document.createElement("div")
    const testimonyHead = document.createElement("h2")
    const testimony = document.createElement("p")

    testimonyHead.innerHTML = "Our story"
    testimony.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis quis tortor id ultricies. Nunc mollis sit amet lectus eget malesuada. Praesent ac quam id diam congue placerat eget quis orci. Mauris at purus sem. Sed pretium molestie diam, at elementum enim iaculis vel. Cras eget nulla blandit, feugiat nisi a, lacinia justo. Maecenas sit amet pharetra mauris."
    testimonyBox.appendChild(testimonyHead)
    testimonyBox.appendChild(testimony)

    const hoursBox = document.createElement("div")
    
    const hoursHead = document.createElement("h2")
    const hours = document.createElement("ul")
    hoursHead.innerHTML = "Hours"
    const hoursDay = []

    for(let i=0; i<7; i++){
        hoursDay[i] = document.createElement("li")
    }
    hoursDay[0].innerHTML = "Sunday - 8am-6pm"
    hoursDay[1].innerHTML = "Monday - 7am-8pm"
    hoursDay[2].innerHTML = "Tuesday - 7am-8pm"
    hoursDay[3].innerHTML = "Wednesday - 7am-8pm"
    hoursDay[4].innerHTML = "Thursday - 7am-8pm"
    hoursDay[5].innerHTML = "Friday - 7am-9pm"
    hoursDay[6].innerHTML = "Saturday - 8am-9pm"
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
    containerBox.appendChild(testimonyBox)
    

    
    content.appendChild(containerBox)

}

export{aboutGreeting, createAbout}
