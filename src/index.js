import "./styles.css";

import {createMenu, menuGreeting} from "./menu"
import {aboutGreeting, createAbout} from "./about"
import { createHome } from "./home";


console.log(menuGreeting);

console.log(aboutGreeting);

const homeButton = document.getElementById("homeButton")
homeButton.innerHTML = "HOME"
const menuButton = document.getElementById("menuButton")
menuButton.innerHTML = "MENU"
const aboutButton = document.getElementById("aboutButton")
aboutButton.innerHTML = "ABOUT"
const title = document.getElementById("title")
title.innerHTML = "EVIL BURGER RESTAURANT"



homeButton.addEventListener("click",createHome)
menuButton.addEventListener("click",createMenu)
aboutButton.addEventListener("click",createAbout)
createHome()