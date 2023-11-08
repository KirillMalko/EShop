import { getDataLocalStorage, setDataLocalStorage } from '../utils.js'

import { renderCardsInBasket } from '../renders/renderCardInbasket'
import { basketFilling } from './basketFilling'
import { handlerCloseModal } from '../createModal'

export function handlerChangeCardsInBasketQuantity (event) {
  if (getDataLocalStorage('cards').length) {
    const currentProduct = event.target.closest('.basket-card')
    const addedToBasketCards = getDataLocalStorage('cards')
    const allCardsWithNoChangedPrice = getDataLocalStorage('changeButton')
    const currentCardPrice = allCardsWithNoChangedPrice.find((card) => card.id === currentProduct.id).price

    if (event.target.className === 'basket-card-controls__item-counter-plus') {
      const cardsWithChangedCost = addedToBasketCards.map((card) => {
        if (card.id === currentProduct.id) {
          if (!card.count) {
            card.count = 1
          }
          card.count = card.count + 1
          card.price = card.price + currentCardPrice
        }
        return card
      })
      refreshBasket(cardsWithChangedCost)
    } else if (event.target.className === 'basket-card-controls__item-counter-minus') {
      const cardsWithChangedCost = addedToBasketCards.map((card) => {
        if (card.id === currentProduct.id) {
          if (card.count > 1) {
            if (card.id === currentProduct.id) {
              if (!card.count) {
                card.count = 1
              }
              card.count = card.count - 1
              card.price = card.price - currentCardPrice
            }
          }
        }
        return card
      })
      refreshBasket(cardsWithChangedCost)
    }
  }
}

function refreshBasket (cardsWithChangedCost) {
  setDataLocalStorage('cards', cardsWithChangedCost)
  renderCardsInBasket(cardsWithChangedCost)
  const modalBackground = document.querySelector('.modal-background')
  modalBackground.innerHTML = ''
  modalBackground.append(basketFilling())
  const closeModal = document.querySelector('.close-modal')
  closeModal.addEventListener('click', (event) => handlerCloseModal(event))
}
