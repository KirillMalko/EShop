import { createProductCard } from '../../components/index.js'

const cardsContainer = document.querySelector('.product-cards__container')

export function renderCard (cards) {
  cardsContainer.innerHTML = ''
  cards.forEach(({ image, price, oldPrice, productsBrand, productsName, id, inBasket }) => {
    const productCard = createProductCard(image, price, oldPrice, productsBrand, productsName, id, inBasket)
    cardsContainer.append(productCard)
  })
}
