export function getDataLocalStorage (key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return []
  }
}

export function setDataLocalStorage (key, array) {
  localStorage.setItem(key, JSON.stringify(array))
}
