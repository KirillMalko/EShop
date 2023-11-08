export function createBasket (totalPrice) {
  const basketWrapper = document.createElement('div')
  basketWrapper.className = 'basket-wrapper'
  document.body.append(basketWrapper)

  const basketCloseBtn = document.createElement('button')
  basketCloseBtn.className = 'close-modal'
  basketCloseBtn.type = 'button'
  basketWrapper.append(basketCloseBtn)

  const basketCloseBtnCross = document.createElement('span')
  basketCloseBtnCross.className = 'close-modal-cross'
  basketCloseBtn.append(basketCloseBtnCross)

  const basketWindow = document.createElement('div')
  basketWindow.className = 'basket-window'
  basketWrapper.append(basketWindow)

  const basketWindowHeader = document.createElement('header')
  basketWindowHeader.className = 'basket-window__header'
  basketWindow.append(basketWindowHeader)

  const basketTitle = document.createElement('h2')
  basketTitle.className = 'basket-window__header-title'
  basketTitle.innerText = 'Корзина'
  basketWindowHeader.append(basketTitle)

  const basketCardsContainer = document.createElement('div')
  basketCardsContainer.className = 'basket-window__cards-container'
  basketWindow.append(basketCardsContainer)

  const totalWindow = document.createElement('div')
  totalWindow.className = 'total-window'
  basketWrapper.append(totalWindow)

  const totalWindowHeader = document.createElement('header')
  totalWindowHeader.className = 'total-window__header'
  totalWindow.append(totalWindowHeader)

  const totalTitle = document.createElement('h2')
  totalTitle.className = 'total-window__header-title'
  totalTitle.innerText = 'Итого'
  totalWindowHeader.append(totalTitle)

  const totalCost = document.createElement('h2')
  totalCost.className = 'total-window__header-total-cost'
  totalCost.innerText = `${totalPrice} ₽`
  totalWindowHeader.append(totalCost)

  const removeBasketBtn = document.createElement('button')
  removeBasketBtn.className = 'total-window__remove-btn'
  removeBasketBtn.type = 'button'
  removeBasketBtn.innerText = 'Очистить корзину'
  totalWindow.append(removeBasketBtn)

  const orderBasketBtn = document.createElement('button')
  orderBasketBtn.className = 'total-window__order-btn'
  orderBasketBtn.type = 'button'
  orderBasketBtn.innerText = 'Заказать'
  totalWindow.append(orderBasketBtn)

  return basketWrapper
}
