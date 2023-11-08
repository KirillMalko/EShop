import { renderBigProductCard } from './index.js'
const PRODUCTS_URL = 'https://654b43c65b38a59f28eec501.mockapi.io/products/products'

export async function handlerShowBigCard (event) {
  if (event.target.className === 'product-card__image') {
    const res = await fetch(PRODUCTS_URL)
    const cards = await res.json()
    const currentCard = cards.filter((card) => +card.id === +event.target.id)
    renderBigProductCard(currentCard)
  }
}
