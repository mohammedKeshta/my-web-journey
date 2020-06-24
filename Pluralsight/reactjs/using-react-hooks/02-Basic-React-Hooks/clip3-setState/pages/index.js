import React, { useState, useEffect } from 'react'
import Head from 'next/head'

const InputElement = () => {
  const [inputText, setInputText] = useState('')
  const [historyList, setHistoryList] = useState([])

  useEffect(() => {
    if (inputText.length === 0) {
      setHistoryList([])
    }
  }, [inputText])

  return (
    <div>
      <Head>
        <title>Use State</title>
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
        {historyList.map((rec, index) => {
          const identifer = `${rec}-${index}`
          return (
            <div id={identifer} key={identifer}>
              {rec}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default InputElement
