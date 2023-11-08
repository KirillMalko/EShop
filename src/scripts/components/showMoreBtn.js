export function createShowMoreBtn () {
  const showMoreBtn = document.createElement('button')
  showMoreBtn.className = 'show-more-btn'
  showMoreBtn.type = 'button'
  showMoreBtn.innerText = 'Показать еще ↓'
  return showMoreBtn
}
