import "./styles.css";

import {menuGreeting} from "./menu"
import {aboutGreeting} from "./about"
import { createHome } from "./home";

console.log(menuGreeting);

console.log(aboutGreeting);

const homeButton = document.getElementById("homeButton")
homeButton.innerHTML = "HOME"
const menuButton = document.getElementById("menuButton")
menuButton.innerHTML = "MENU"
const aboutButton = document.getElementById("aboutButton")
aboutButton.innerHTML = "ABOUT"

homeButton.addEventListener("click",createHome)

createHome()