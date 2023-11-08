export function createBigProductCard (image, price, oldPrice, productsBrand, productsName, id, inBasket, description) {
  const productCard = document.createElement('div')
  productCard.className = 'big-product-card'

  const basketCloseBtn = document.createElement('button')
  basketCloseBtn.className = 'close-modal'
  basketCloseBtn.type = 'button'
  productCard.append(basketCloseBtn)

  const basketCloseBtnCross = document.createElement('span')
  basketCloseBtnCross.className = 'close-modal-cross'
  basketCloseBtn.append(basketCloseBtnCross)

  const productImage = document.createElement('img')
  productImage.className = 'big-product-card__image'
  productImage.alt = 'product image'
  productImage.id = `${id}`
  productImage.src = `${image}`
  productCard.append(productImage)

  const noPictureBlock = document.createElement('div')
  noPictureBlock.className = 'big-product-card__no-picture-block'
  productCard.append(noPictureBlock)

  const productDescription = document.createElement('div')
  productDescription.className = 'big-product-card__product-description-box'
  noPictureBlock.append(productDescription)

  const productBrand = document.createElement('span')
  productBrand.className = 'big-product-card__product-brand'
  productBrand.innerText = `${productsBrand} ·`
  productDescription.append(productBrand)

  const productName = document.createElement('span')
  productName.className = 'big-product-card__product-name'
  productName.innerText = `${productsName}`
  productDescription.append(productName)

  const priceBox = document.createElement('div')
  priceBox.className = 'big-product-card__price-box'
  noPictureBlock.append(priceBox)

  const productPrice = document.createElement('span')
  productPrice.className = 'big-product-card__price'
  productPrice.innerText = `${price} ₽ `
  priceBox.append(productPrice)

  const productDiscount = document.createElement('span')
  productDiscount.className = 'big-product-card__discount'
  productDiscount.innerText = `-${Math.round((price * 100) / oldPrice)}% `
  priceBox.append(productDiscount)

  const productOldPrice = document.createElement('span')
  productOldPrice.className = 'big-product-card__old-price'
  productOldPrice.innerText = `${oldPrice} ₽ `
  priceBox.append(productOldPrice)

  const productInfo = document.createElement('span')
  productOldPrice.className = 'big-product-card__descriptionInfo'
  productOldPrice.innerText = `${description}`
  priceBox.append(productInfo)
  return productCard
}
