console.log('client')

const postData = async (url = '', data = {}) => {
  console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  })

  try {
    const newData = await response.json()
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error)
  }
}

postData('/add', { answer: 42 }).catch((error) => console.log(error))
postData('/add', { answer: 43 }).catch((error) => console.log(error))
postData('/add', { answer: 44 }).catch((error) => console.log(error))
