import { setDataLocalStorage, getDataLocalStorage } from '../utils.js'
import { createProductCards, basketProductsCounter } from '../index.js'

const PRODUCTS_URL = 'https://654b43c65b38a59f28eec501.mockapi.io/products/products'

export async function handlerGetCurrentProduct (event) {
  if (!event.target.matches('.product-card__button')) {
    return event.target
  }
  const cardsInBasket = getDataLocalStorage('cards')
  const cardsWithChangedButtons = getDataLocalStorage('changeButton')
  const cardId = event.target.id
  const res = await fetch(PRODUCTS_URL)
  const cards = await res.json()

  if (cardsWithChangedButtons.length > 0) {
    const currentProduct = cardsWithChangedButtons[cardId - 1]
    cardsButtonChange(currentProduct, cardsWithChangedButtons)
    cardsInBasket.push(currentProduct)
    setDataLocalStorage('cards', cardsInBasket)
    createProductCards()
    basketProductsCounter()
  } else {
    const currentProduct = cards[cardId - 1]
    cardsButtonChange(currentProduct, cards)
    cardsInBasket.push(currentProduct)
    setDataLocalStorage('cards', cardsInBasket)
    createProductCards()
    basketProductsCounter()
  }
}

function cardsButtonChange (currentProduct, array) {
  currentProduct.inBasket = !currentProduct.inBasket
  setDataLocalStorage('changeButton', array)
}
