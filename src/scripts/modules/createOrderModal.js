import { createErrorOrderingModal, createOrderingModal, createSuccessOrderingModal } from '../components/index.js'
import { createProductCards, handlerCloseModal, basketProductsCounter } from './index.js'
import { getDataLocalStorage } from './utils.js'

function getInputNumbersValue (input) {
  return input.value.replace(/\D/g, '')
}

function onPhonePaste (event) {
  const input = event.target
  const inputNumbersValue = getInputNumbersValue(input)
  const pasted = event.clipboardData || window.clipboardData
  if (pasted) {
    const pastedText = pasted.getData('Text')
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue
    }
  }
}

function onPhoneInput (event) {
  const input = event.target
  let inputNumbersValue = getInputNumbersValue(input)
  const selectionStart = input.selectionStart
  let formattedInputValue = ''

  if (!inputNumbersValue) {
    return (input.value = '')
  }

  if (input.value.length !== selectionStart) {
    if (event.data && /\D/g.test(event.data)) {
      input.value = inputNumbersValue
    }
    return
  }

  if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue
    const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7'
    formattedInputValue = input.value = firstSymbols + ' '
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4)
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9)
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11)
    }
  } else {
    formattedInputValue = '+' + inputNumbersValue.substring(0, 16)
  }
  input.value = formattedInputValue
}

function onPhoneKeyDown (event) {
  const inputValue = event.target.value.replace(/\D/g, '')
  if (event.keyCode === 8 && inputValue.length === 1) {
    event.target.value = ''
  }
}

export function orderModal () {
  if (getDataLocalStorage('cards').length) {
    const orderModal = createOrderingModal()
    document.addEventListener('click', (event) => {
      if (event.target.matches('.modal-order__input-phone-num')) {
        event.target.addEventListener('keydown', onPhoneKeyDown)
        event.target.addEventListener('input', onPhoneInput)
        event.target.addEventListener('paste', onPhonePaste)
      } else if (event.target.matches('.modal-order__btn-accept')) {
        event.preventDefault()
        if (document.querySelector('.modal-order__input-phone-num').value) {
          const modalBackground = event.target.closest('.modal-background')
          modalBackground.innerHTML = ''
          document.querySelector('.modal-background').remove()
          const successOrder = createSuccessOrderingModal()
          modalBackground.append(successOrder)
          localStorage.clear()
          createProductCards()
          basketProductsCounter()
          document.querySelector('.close-modal').addEventListener('click', (event) => handlerCloseModal(event))
        }
      }
    })
    return orderModal
  } else {
    const errorOrder = createErrorOrderingModal()
    return errorOrder
  }
}
