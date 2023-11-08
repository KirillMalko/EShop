export function search (arr, value) {
  const filterArr = arr.filter(
    (item) =>
      item.productsName.toLowerCase().includes(value.toLowerCase()) ||
      item.productsBrand.toLowerCase().includes(value.toLowerCase())
  )
  return filterArr
}
