import { createModalBackground } from '../components/index.js'

export function handlerCloseModal (event) {
  event.target.closest('.modal-background').remove()
  document.body.style.overflowY = ''
}

export function handlerModal (modal) {
  const modalBackground = createModalBackground()
  document.body.append(modalBackground)
  modalBackground.append(modal)
  document.body.style.overflowY = 'hidden'

  const closeModal = document.querySelectorAll('.close-modal')
  closeModal.forEach((item) => item.addEventListener('click', (event) => handlerCloseModal(event)))
}
