export function createOrderingModal () {
  const modalOrder = document.createElement('div')
  modalOrder.className = 'modal-order'

  const btnClose = document.createElement('button')
  btnClose.className = 'close-modal'
  btnClose.type = 'button'
  modalOrder.append(btnClose)

  const btnCross = document.createElement('span')
  btnCross.className = 'close-modal-cross'
  btnClose.append(btnCross)

  const orderTitle = document.createElement('h2')
  orderTitle.className = 'modal-order__title'
  orderTitle.innerText = 'Оформление заказа'
  modalOrder.append(orderTitle)

  const orderInfo = document.createElement('h5')
  orderInfo.className = 'modal-order__info'
  orderInfo.innerText = 'Контактный телефон'
  modalOrder.append(orderInfo)

  const orderForm = document.createElement('form')
  orderForm.className = 'modal-order__form'
  orderForm.action = '#'
  orderForm.name = 'order-form'
  modalOrder.append(orderForm)

  const phoneNumberInput = document.createElement('input')
  phoneNumberInput.className = 'modal-order__input-phone-num'
  phoneNumberInput.placeholder = 'Телефон'
  phoneNumberInput.name = 'order-input-tel'
  phoneNumberInput.type = 'tel'
  phoneNumberInput.setAttribute('maxlength', '18')
  phoneNumberInput.setAttribute('required', '')
  orderForm.append(phoneNumberInput)

  const btnAccept = document.createElement('button')
  btnAccept.className = 'modal-order__btn-accept'
  btnAccept.innerText = 'Оформить заказ'
  btnAccept.type = 'submit'
  orderForm.append(btnAccept)

  const modalTerms = document.createElement('p')
  modalTerms.className = 'modal-order__terms'
  modalTerms.innerText = 'Согласен с условиями Правил пользования торговой площадкой и правилами возврата'
  modalOrder.append(modalTerms)

  return modalOrder
}
