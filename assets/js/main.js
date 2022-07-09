let modeToggle = () =>  {
  let theme
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-mode')
    theme = document.body.classList.contains("light-mode")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle('dark-mode')
    theme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  }
  localStorage.setItem("theme", theme);
}

const modeSwitch = document.querySelector('#mode-switch')
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-mode");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-mode");
}

modeSwitch.addEventListener('click', modeToggle )
