import { getDataLocalStorage } from '../utils.js'

export function basketProductsCounter () {
  const count = getDataLocalStorage('cards')
  const countBox = document.querySelector('.main-header__basket-product-counter')
  if (count.length > 0) {
    countBox.style.display = 'inline-block'
    const basketCounter = document.querySelector('.main-header__basket-product-count')
    basketCounter.innerText = `${count.length}`
  } else {
    countBox.style.display = 'none'
  }
}
