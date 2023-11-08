import {
  addBannerEventListeners,
  handlerScrollTop,
  handlerShowScrollButton,
  handlerRenderSearchResult,
  createProductCards,
  handlerGetCurrentProduct,
  basketFilling,
  handlerModal,
  basketProductsCounter,
  handlerShowBigCard,
} from './modules/index.js'
import { createPhoneBtn, createTopScrollBtn, createAuthorizationWindow } from './components/index.js'

export function initApp() {
  const basketBtn = document.querySelector('.main-header__basket')
  basketBtn.addEventListener('click', () => handlerModal(basketFilling()))

  const logInBtn = document.querySelector('.main-header__profile')
  logInBtn.addEventListener('click', () => handlerModal(createAuthorizationWindow()))
  basketProductsCounter()

  addBannerEventListeners()

  createProductCards()

  const formInput = document.querySelector('.main-header__search-input')
  formInput.addEventListener('input', handlerRenderSearchResult)

  const cardsContainer = document.querySelector('.product-cards__container')
  cardsContainer.addEventListener('click', handlerGetCurrentProduct)
  cardsContainer.addEventListener('click', handlerShowBigCard)

  const topButton = createTopScrollBtn()
  const phoneButton = createPhoneBtn()
  document.documentElement.append(topButton, phoneButton)
  window.addEventListener('scroll', () => handlerShowScrollButton(topButton))
  topButton.addEventListener('click', handlerScrollTop)
}
