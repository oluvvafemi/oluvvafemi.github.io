let modeToggle = () =>  {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-mode');
  } else {
    document.body.classList.toggle('dark-mode');
  }
  // document.body.classList.toggle('dark-mode');
  // counter++
  // modeSwitch.src = modeIcons[counter%2]
}

// let pageBody = document.body;
const modeSwitch = document.querySelector('#mode-switch')
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let modeIcons = ['assets/images/mode/moon.png','assets/images/mode/sun-64.png']
// let counter = 0

modeSwitch.addEventListener('click', modeToggle )
