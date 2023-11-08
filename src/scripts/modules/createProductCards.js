import { renderCard, showCards, handlerShowMore } from './index.js'
import { createShowMoreBtn } from '../components/index.js'
import { getDataLocalStorage } from './utils.js'

const PRODUCTS_URL = 'https://654b43c65b38a59f28eec501.mockapi.io/products/products'
const cardsContainer = document.querySelector('.product-cards__container')

export async function createProductCards () {
  const load = document.createElement('div')
  load.className = 'loader'
  if (!document.querySelector('.product-card')) {
    cardsContainer.append(load)
    load.toggleAttribute('hidden', false)
  }
  try {
    const res = await fetch(PRODUCTS_URL)
    const cards = await res.json()
    const cardsWithChangedButtons = getDataLocalStorage('changeButton')
    if (cardsWithChangedButtons.length > 0) {
      renderCard(cardsWithChangedButtons)
    } else {
      renderCard(cards)
    }

    const showMoreBtn = createShowMoreBtn()
    cardsContainer.append(showMoreBtn)
    const cardsArr = Array.from(document.querySelectorAll('.product-card'))

    showCards(showMoreBtn, cardsArr)
    showMoreBtn.addEventListener('click', () => handlerShowMore(showMoreBtn, cardsArr))
    window.addEventListener('resize', () => showCards(showMoreBtn, cardsArr))
  } catch (error) {
    console.warn(error)
  } finally {
    load.toggleAttribute('hidden', true)
  }
}
