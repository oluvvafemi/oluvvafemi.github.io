function modeToggle() {
  pageBody.classList.toggle('dark-mode');
  counter++
  modeSwitch.src = modeIcons[counter%2]
}

let pageBody = document.body;
let modeSwitch = document.querySelector('#mode-switch')
let modeIcons = ['assets/images/mode/moon.png','assets/images/mode/sun-64.png']
let counter = 0

modeSwitch.addEventListener('click', modeToggle )