import { createBigProductCard } from '../../components/index.js'
import { handlerModal } from '../index.js'

export function renderBigProductCard (cards) {
  cards.forEach(({ image, price, oldPrice, productsBrand, productsName, id, inBasket, description }) => {
    const bigProductCard = createBigProductCard(image, price, oldPrice, productsBrand, productsName, id, inBasket, description)
    handlerModal(bigProductCard)
  })
}
