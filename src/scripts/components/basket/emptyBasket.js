import emptyBasketIcon from '../../../assets/icons/basket.svg'
export function emptyBasket () {
  const emptyBlock = document.createElement('div')
  emptyBlock.className = 'empty-basket'

  const basketPic = new Image()
  basketPic.className = 'empty-basket__image'
  basketPic.src = emptyBasketIcon
  emptyBlock.append(basketPic)

  const emptyBasket = document.createElement('h3')
  emptyBasket.className = 'empty-basket__text'
  emptyBasket.innerText = 'Ваша корзина пуста ... '
  emptyBlock.append(emptyBasket)

  return emptyBlock
}
