export const authorization = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',

    headers: {
      'Content-type': 'application/json',
    },

    body: JSON.stringify(data),
  })
  return response.json()
}

export const registration = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',

    headers: {
      'Content-type': 'application/json',
    },

    body: JSON.stringify(data),
  })
  return response.json()
}
