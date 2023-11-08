import { createBasketCard, emptyBasket } from '../../components/index.js'

export function renderCardsInBasket (cards) {
  const basketCardsContainer = document.querySelector('.basket-window__cards-container')
  basketCardsContainer.innerHTML = ''
  if (cards.length > 0) {
    cards.forEach(({ image, price, oldPrice, productsBrand, productsName, id, count }) => {
      const productCard = createBasketCard(image, price, oldPrice, productsBrand, productsName, id, count)
      basketCardsContainer.append(productCard)
    })
  } else {
    const noProducts = emptyBasket()
    basketCardsContainer.append(noProducts)
  }
}
