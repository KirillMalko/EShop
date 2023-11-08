export function showCards (showMoreBtn, cards) {
  showMoreBtn.classList.add('hidden')
  if (window.innerWidth > 1043) {
    cards.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 17) {
        item.classList.remove('hidden')
      } else {
        showMoreBtn.classList.remove('hidden')
      }
    })
  } else if (window.innerWidth <= 1043 && window.innerWidth > 443) {
    cards.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 7) {
        item.classList.remove('hidden')
      } else {
        showMoreBtn.classList.remove('hidden')
      }
    })
  } else {
    cards.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 3) {
        item.classList.remove('hidden')
      } else {
        showMoreBtn.classList.remove('hidden')
      }
    })
  }
}

export function handlerShowMore (showMoreBtn, cards) {
  showMoreBtn.classList.add('hidden')
  cards.forEach((item) => item.classList.remove('hidden'))
  showMoreBtn.classList.add('hidden')
}
