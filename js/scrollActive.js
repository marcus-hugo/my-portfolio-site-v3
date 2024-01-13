const header = document.querySelector(".header")
let themeToggle = document.querySelector("#theme-toggle")
let currentTheme

themeToggle.addEventListener("change", function (e) {
  let top = window.scrollY
  currentTheme = themeToggle.checked

  console.log(e)
  setHeaderColor(top, currentTheme)
})

document.addEventListener("scroll", function () {
  let top = window.scrollY
  currentTheme = themeToggle.checked
  console.log(top, currentTheme)
  setHeaderColor(top, currentTheme)
})

function setHeaderColor(top) {
  if (top >= 30 && currentTheme === true) {
    header.classList.remove("header-shadow")

    header.classList.add("on-scroll")
  } else if (top < 30 && currentTheme === true) {
    header.classList.remove("on-scroll")
  }

  if (top >= 30 && currentTheme === false) {
    header.classList.remove("on-scroll")

    header.classList.add("header-shadow")
  } else if (top < 30 && currentTheme === false) {
    header.classList.remove("header-shadow")
  }
}
