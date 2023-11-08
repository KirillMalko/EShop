import trashIcon from '../../../assets/icons/trash.svg'

export function createBasketCard (image, price, oldPrice, productsBrand, productsName, id, counter = 1) {
  const basketCard = document.createElement('div')
  basketCard.className = 'basket-card'
  basketCard.id = `${id}`

  const contentBlock = document.createElement('div')
  contentBlock.className = 'basket-card-content-block'
  basketCard.append(contentBlock)

  const basketItemImage = document.createElement('div')
  basketItemImage.className = 'basket-card-content-block__image'
  contentBlock.append(basketItemImage)

  const basketItemImageIcon = document.createElement('img')
  basketItemImageIcon.className = 'basket-card-content-block__image-icon'
  basketItemImageIcon.alt = 'product image'
  basketItemImageIcon.src = `${image}`
  basketItemImage.append(basketItemImageIcon)

  const basketItemInfo = document.createElement('div')
  basketItemInfo.className = 'basket-card-content-block__info'
  contentBlock.append(basketItemInfo)

  const basketItemInfoName = document.createElement('h4')
  basketItemInfoName.className = 'basket-card-content-block__info-name'
  basketItemInfoName.innerText = `${productsName}`
  basketItemInfo.append(basketItemInfoName)

  const basketItemInfoBrand = document.createElement('h5')
  basketItemInfoBrand.className = 'basket-card-content-block__info-brand'
  basketItemInfoBrand.innerText = `${productsBrand}`
  basketItemInfo.append(basketItemInfoBrand)

  const priceBlock = document.createElement('div')
  priceBlock.className = 'basket-card-price-block'
  basketCard.append(priceBlock)

  const basketCardControls = document.createElement('div')
  basketCardControls.className = 'basket-card-controls'
  priceBlock.append(basketCardControls)

  const basketItemCounter = document.createElement('div')
  basketItemCounter.className = 'basket-card-controls__item-counter'
  basketCardControls.append(basketItemCounter)

  const counterBtnMinus = document.createElement('button')
  counterBtnMinus.className = 'basket-card-controls__item-counter-minus'
  counterBtnMinus.type = 'button'
  counterBtnMinus.innerText = '−'
  basketItemCounter.append(counterBtnMinus)
  if (counter === 1) counterBtnMinus.disabled = true

  const counterValue = document.createElement('div')
  counterValue.className = 'basket-card-controls__item-counter-value'
  counterValue.innerText = `${counter}`
  basketItemCounter.append(counterValue)

  const counterBtnPlus = document.createElement('button')
  counterBtnPlus.className = 'basket-card-controls__item-counter-plus'
  counterBtnPlus.type = 'button'
  counterBtnPlus.innerText = '+'
  basketItemCounter.append(counterBtnPlus)

  const basketItemRemoveBtn = document.createElement('button')
  basketItemRemoveBtn.className = 'basket-card-controls__remove-btn'
  basketItemRemoveBtn.type = 'button'
  basketCardControls.append(basketItemRemoveBtn)

  const basketItemRemoveBtnIcon = new Image()
  basketItemRemoveBtnIcon.className = 'basket-card-controls__remove-btn-icon'
  basketItemRemoveBtnIcon.src = trashIcon
  basketItemRemoveBtn.append(basketItemRemoveBtnIcon)

  const basketItemPriceContainer = document.createElement('div')
  basketItemPriceContainer.className = 'basket-card-price'
  priceBlock.append(basketItemPriceContainer)

  const basketItemPriceNew = document.createElement('p')
  basketItemPriceNew.className = 'basket-card-price__new-price'
  basketItemPriceNew.innerText = `${price} ₽`
  basketItemPriceContainer.append(basketItemPriceNew)

  const basketItemPriceOld = document.createElement('span')
  basketItemPriceOld.className = 'basket-card-price__old-price'
  basketItemPriceOld.innerText = `${oldPrice} ₽`
  basketItemPriceContainer.append(basketItemPriceOld)

  return basketCard
}
