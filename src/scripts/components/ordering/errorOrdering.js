export function createErrorOrderingModal () {
  const errorModalOrder = document.createElement('div')
  errorModalOrder.className = 'modal-order'

  const btnClose = document.createElement('button')
  btnClose.className = 'close-modal'
  btnClose.type = 'button'
  errorModalOrder.append(btnClose)

  const btnCross = document.createElement('span')
  btnCross.className = 'close-modal-cross'
  btnClose.append(btnCross)

  const errorOrderTitle = document.createElement('h2')
  errorOrderTitle.className = 'modal-order__title'
  errorOrderTitle.innerText = 'В корзине пока пусто'
  errorModalOrder.append(errorOrderTitle)

  const errorOrderInfo = document.createElement('h5')
  errorOrderInfo.className = 'modal-order__info'
  errorOrderInfo.innerText = 'Загляните на главную, чтобы выбрать товары или найдите нужное в поиске'
  errorModalOrder.append(errorOrderInfo)

  return errorModalOrder
}
