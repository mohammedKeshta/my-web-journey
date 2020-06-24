import React, { useState } from 'react'
import Head from 'next/head'

const InputElement = () => {
  const [inputText, setInputText] = useState('')
  const [historyList, setHistoryList] = useState([])

  return (
    <div>
      <Head>
        <title>Use Effect</title>
      </Head>
      <input
        onChange={(e) => {
          setInputText(e.target.value)
          setHistoryList([...historyList, e.target.value])
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec) => {
          return <div>{rec}</div>
        })}
      </ul>
    </div>
  )
}

export default InputElement
