import { getDataLocalStorage, setDataLocalStorage } from '../utils.js'
import {
  handlerCloseModal,
  renderCardsInBasket,
  createProductCards,
  basketFilling,
  basketProductsCounter
} from '../index.js'

export function handlerDeleteCurrentProductFromBasket (event) {
  if (event.target.className === 'basket-card-controls__remove-btn-icon') {
    const currentProduct = event.target.closest('.basket-card')
    const addedToBasketCards = getDataLocalStorage('cards')
    const cardsWithoutDeleted = addedToBasketCards.filter((card) => card.id !== currentProduct.id)
    const cardsWithChangedButtons = getDataLocalStorage('changeButton')
    const deletedCardButtonChange = cardsWithChangedButtons.map((card) => {
      if (card.id === currentProduct.id) {
        card.inBasket = !card.inBasket
      }
      return card
    })
    setDataLocalStorage('changeButton', deletedCardButtonChange)
    setDataLocalStorage('cards', cardsWithoutDeleted)
    basketProductsCounter()
    renderCardsInBasket(cardsWithoutDeleted)
    createProductCards()
    const modalBackground = document.querySelector('.modal-background')
    modalBackground.innerHTML = ''
    modalBackground.append(basketFilling())
    if (!getDataLocalStorage('cards').length) {
      localStorage.clear()
    }
    const closeModal = document.querySelector('.close-modal')
    closeModal.addEventListener('click', (event) => handlerCloseModal(event))
  }
}
