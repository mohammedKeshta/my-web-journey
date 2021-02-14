const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
    return await response.json()
  } catch (error) {
    console.error('error', error)
  }
}

function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let url = document.getElementById('url').value
  if (Client.isURLValid(url)) {
    console.log('::: Form Submitted :::')
    const API_URL = `http://localhost:8081/add-url`
    postData(API_URL, { url }).then((res) => {
      const { score_tag, agreement, subjectivity, confidence, irony } = res
      document.getElementById('polarity').innerHTML = `Polarity:  ${score_tag}`
      document.getElementById('agreement').innerHTML = `Agreement: ${agreement}`
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${subjectivity}`
      document.getElementById('confidence').innerHTML = `Confidence: ${confidence}`
      document.getElementById('irony').innerHTML = `Irony: ${irony}`
    })
  } else {
    alert('Please try with a valid URL.')
  }
}

export default handleSubmit
