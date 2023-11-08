export function createSuccessOrderingModal () {
  const successModalOrder = document.createElement('div')
  successModalOrder.className = 'modal-order'

  const btnClose = document.createElement('button')
  btnClose.className = 'close-modal'
  btnClose.type = 'button'
  successModalOrder.append(btnClose)

  const btnCross = document.createElement('span')
  btnCross.className = 'close-modal-cross'
  btnClose.append(btnCross)

  const successOrderTitle = document.createElement('h2')
  successOrderTitle.className = 'modal-order__title'
  successOrderTitle.innerText = 'Ваш заказ успешно оформлен!'
  successModalOrder.append(successOrderTitle)

  const successOrderInfo = document.createElement('h5')
  successOrderInfo.className = 'modal-order__info'
  successOrderInfo.innerText = 'Ожидайте звонка менеджера...'
  successModalOrder.append(successOrderInfo)

  return successModalOrder
}
