function modeToggle() {
  pageBody.classList.toggle('dark-mode');
  // contactButton.classList.toggle('.dark-mode-contact')
  // mode_switch.classList.toggle("dark-mode")
  counter++
  modeSwitch.src = modeIcons[counter%2]
}

let pageBody = document.body;
// let contactButton = document.querySelector('#contact-me')
let modeSwitch = document.querySelector('#mode-switch')
let modeIcons = ['assets/images/moon.png','assets/images/sun-64.png']
let counter = 0

modeSwitch.addEventListener('click', modeToggle )
