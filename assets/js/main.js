let modeToggle = () =>  {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-mode')
    changeModeIcon()
  } else {
    document.body.classList.toggle('dark-mode')
    changeModeIcon()
  }
}

let changeModeIcon = () => {
  counter++
  modeSwitch.src = modeIcons[counter%2]
}

const modeSwitch = document.querySelector('#mode-switch')
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let switchIcons =['assets/images/mode/moon.png', 'assets/images/mode/sun-64.png']
let modeIcons
let counter = 0

window.addEventListener('load', () => {
  if (prefersDarkScheme.matches) {
    modeSwitch.src = switchIcons[1]
    modeIcons = switchIcons.reverse()
  } 
  else {
    modeIcons = switchIcons
  }
})
modeSwitch.addEventListener('click', modeToggle )
