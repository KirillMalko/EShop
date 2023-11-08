import { authorization, registration } from '../modules'

export function createAuthorizationWindow() {
  const modal = document.createElement('div')
  modal.className = 'modal'
  document.body.append(modal)

  const modalSignIn = document.createElement('div')
  modalSignIn.className = 'modal__sign-in'
  modal.append(modalSignIn)

  const modalTitle = document.createElement('h2')
  modalTitle.className = 'modal__title-text'
  modalTitle.innerHTML = `Войти или создать <br> профиль`
  modalSignIn.append(modalTitle)

  const btnClose = document.createElement('button')
  btnClose.className = 'close-modal'
  btnClose.type = 'button'
  modalSignIn.append(btnClose)

  const btnCross = document.createElement('span')
  btnCross.className = 'close-modal-cross'
  btnClose.append(btnCross)

  const formSignIn = document.createElement('form')
  formSignIn.className = 'modul__form-sign-in'
  formSignIn.action = '#'
  formSignIn.name = 'sign-in-form'
  modalSignIn.append(formSignIn)

  const loginSignIn = document.createElement('input')
  loginSignIn.className = 'modal__input-sign-in'
  loginSignIn.placeholder = 'Логин'
  loginSignIn.name = 'sign-in-input-login'
  loginSignIn.type = 'text'
  loginSignIn.setAttribute('required', '')
  formSignIn.append(loginSignIn)

  const passwordSignIn = document.createElement('input')
  passwordSignIn.className = 'modal__input-sign-in'
  passwordSignIn.placeholder = 'Пароль'
  passwordSignIn.name = 'sign-in-input-password'
  passwordSignIn.type = 'password'
  passwordSignIn.setAttribute('required', '')
  formSignIn.append(passwordSignIn)

  const btnAuth = document.createElement('button')
  btnAuth.className = 'modal__btn-auth'
  btnAuth.innerText = 'Войти'
  btnAuth.type = 'submit'
  formSignIn.append(btnAuth)

  const modalLine = document.createElement('div')
  modalLine.className = 'line'
  modal.append(modalLine)

  const modalLogIn = document.createElement('div')
  modalLogIn.className = 'modal-down__log-in'
  modal.append(modalLogIn)

  const formLogIn = document.createElement('form')
  formLogIn.className = 'modal-down__form-log-in'
  formLogIn.name = 'sign-up-form'
  formLogIn.action = '#'
  modalLogIn.append(formLogIn)

  const loginLogIn = document.createElement('input')
  loginLogIn.className = 'modal-down__input-log-in'
  loginLogIn.placeholder = 'Логин'
  loginLogIn.name = 'sign-up-input-login'
  loginLogIn.setAttribute('required', '')
  loginLogIn.type = 'text'
  formLogIn.append(loginLogIn)

  const emailLogIn = document.createElement('input')
  emailLogIn.className = 'modal-down__input-log-in'
  emailLogIn.placeholder = 'Адрес электронной почты'
  emailLogIn.name = 'sign-up-input-email'
  emailLogIn.type = 'email'
  emailLogIn.setAttribute('required', '')
  formLogIn.append(emailLogIn)

  const passwordLogIn = document.createElement('input')
  passwordLogIn.className = 'modal-down__input-log-in'
  passwordLogIn.placeholder = 'Пароль'
  passwordLogIn.name = 'sign-up-input-password'
  passwordLogIn.type = 'password'
  passwordLogIn.setAttribute('required', '')
  formLogIn.append(passwordLogIn)

  const btnLogIn = document.createElement('button')
  btnLogIn.className = 'modal-down__btn-log-in'
  btnLogIn.innerText = 'Создать профиль'
  btnLogIn.type = 'submit'
  formLogIn.append(btnLogIn)

  formSignIn.addEventListener('submit', async (e) => {
    e.preventDefault()
    const resp = await authorization('https://trello-clone-cba9.onrender.com/auth/login', {
      username: loginSignIn.value,
      password: passwordSignIn.value,
    })
    if (resp.status === 200) {
      e.target.closest('.modal-background').remove()
      document.querySelector('.main-header__profile-caption').innerText = `${loginSignIn.value}`
    } else {
      alert('Проверьте введенные данные')
    }
  })

  formLogIn.addEventListener('submit', async (e) => {
    e.preventDefault()
    const resp = await registration('https://trello-clone-cba9.onrender.com/auth/registration', {
      username: loginLogIn.value,
      email: emailLogIn.value,
      password: passwordLogIn.value,
    })
    if (resp.status === 200) {
      e.target.closest('.modal-background').remove()
      document.querySelector('.main-header__profile-caption').innerText = `${loginLogIn.value}`
    } else {
      alert('Проверьте введенные данные, пароль должен содержать минимум 4 символа')
    }
  })

  return modal
}
