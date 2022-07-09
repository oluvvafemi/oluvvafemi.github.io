let modeToggle = () =>  {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-mode')
  } else {
    document.body.classList.toggle('dark-mode')
  }
}

const modeSwitch = document.querySelector('#mode-switch')
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

modeSwitch.addEventListener('click', modeToggle )
