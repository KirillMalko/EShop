export function createProductCard (image, price, oldPrice, productsBrand, productsName, id, inBasket, description) {
  const productCard = document.createElement('div')
  productCard.className = 'product-card'
  // maxcoolad@gmail.com, maxcool123, maxcool99099
  const productImage = document.createElement('img')
  productImage.className = 'product-card__image'
  productImage.alt = 'product image'
  productImage.id = `${id}`
  productImage.src = `${image}`
  productCard.append(productImage)

  const productInfo = document.createElement('div')
  productInfo.className = 'product-card__info-wrapper'
  productCard.append(productInfo)

  const priceBox = document.createElement('div')
  priceBox.className = 'product-card__price-box'
  productInfo.append(priceBox)

  const productPrice = document.createElement('span')
  productPrice.className = 'product-card__price'
  productPrice.innerText = `${price} ₽ `
  priceBox.append(productPrice)

  const productDiscount = document.createElement('span')
  productDiscount.className = 'product-card__discount'
  productDiscount.innerText = `-${Math.round((price * 100) / oldPrice)}% `
  priceBox.append(productDiscount)

  const productOldPrice = document.createElement('span')
  productOldPrice.className = 'product-card__old-price'
  productOldPrice.innerText = `${oldPrice} ₽ `
  priceBox.append(productOldPrice)

  const productDescription = document.createElement('div')
  productDescription.className = 'product-card__product-description-box'
  productInfo.append(productDescription)

  const productBrand = document.createElement('span')
  productBrand.className = 'product-card__product-brand'
  productBrand.innerText = `${productsBrand} ·`
  productDescription.append(productBrand)

  const productName = document.createElement('span')
  productName.className = 'product-card__product-name'
  productName.innerText = `${productsName}`
  productDescription.append(productName)

  const basketButton = document.createElement('button')
  basketButton.className = 'product-card__button'
  basketButton.id = `${id}`
  basketButton.disabled = inBasket
  basketButton.type = 'button'
  basketButton.innerText = 'В корзину'
  productInfo.append(basketButton)
  if (inBasket) {
    basketButton.innerText = 'Товар в корзине'
    basketButton.style.backgroundColor = 'rgba(74, 209, 97, 0.897)'
  }

  return productCard
}
