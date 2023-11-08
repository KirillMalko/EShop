import { getDataLocalStorage } from '../utils.js'
import { createBasket } from '../../components/index.js'
import { handlerModal, handlerCloseModal } from '../createModal.js'

import {
  createProductCards,
  handlerChangeCardsInBasketQuantity,
  renderCardsInBasket,
  handlerDeleteCurrentProductFromBasket,
  orderModal,
  basketProductsCounter
} from '../index.js'

export function handlerClearBasket () {
  const modalBackground = document.querySelector('.modal-background')
  if (localStorage.getItem('cards')) {
    modalBackground.innerHTML = ''
    localStorage.clear()
    createProductCards()
    basketProductsCounter()
    modalBackground.append(basketFilling())
    const closeModal = document.querySelector('.close-modal')
    closeModal.addEventListener('click', (event) => handlerCloseModal(event))
  }
}

export function basketFilling () {
  const addedToBasketCards = getDataLocalStorage('cards')
  const totalPrice = addedToBasketCards.reduce((acc, number) => acc + number.price, 0)
  const result = createBasket(totalPrice)
  renderCardsInBasket(addedToBasketCards)
  document
    .querySelector('.basket-window__cards-container')
    .addEventListener('click', handlerDeleteCurrentProductFromBasket)
  document
    .querySelector('.basket-window__cards-container')
    .addEventListener('click', handlerChangeCardsInBasketQuantity)
  const delButt = document.querySelector('.total-window__remove-btn')
  delButt.addEventListener('click', handlerClearBasket)
  const orderButt = document.querySelector('.total-window__order-btn')
  orderButt.addEventListener('click', () => handlerModal(orderModal()))
  return result
}
