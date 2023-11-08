export function handlerShowScrollButton (topButton) {
  const scroll = window.pageYOffset
  const screenHeight = document.documentElement.clientHeight
  if (scroll > screenHeight) {
    topButton.classList.add('active')
  } else {
    topButton.classList.remove('active')
  }
}

export function handlerScrollTop () {
  document.documentElement.scrollTo({
    left: 0,
    top: 0
  })
}
