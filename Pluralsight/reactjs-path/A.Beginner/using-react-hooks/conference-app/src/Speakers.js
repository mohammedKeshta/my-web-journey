import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo } from 'react'

import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/site.css'
import { Header } from '../src/Header'
import { Menu } from '../src/Menu'
import SpeakerData from './SpeakerData'
import SpeakerDetail from './SpeakerDetail'
import { ConfigContext } from './App'
import speakerReducer from './speakerReducer'

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true)
  const [speakingSunday, setSpeakingSunday] = useState(true)

  // const [speakerList, setSpeakerList] = useState([])
  const [speakerList, dispatch] = useReducer(speakerReducer, [])
  const [isLoading, setIsLoading] = useState(true)

  const context = useContext(ConfigContext)

  useEffect(() => {
    setIsLoading(true)
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve()
      }, 1000)
    }).then(() => {
      setIsLoading(false)
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun)
      })
      // setSpeakerList(speakerListServerFilter)
      dispatch({
        type: 'setSpeakerList',
        data: speakerListServerFilter,
      })
    })
    return () => {
      console.log('cleanup')
    }
  }, []) // [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday)
  }
  console.log(speakerList)

  const newSpeakerList = useMemo(
    () =>
      speakerList
        .filter(({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun))
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1
          }
          if (a.firstName > b.firstName) {
            return 1
          }
          return 0
        }),
    [speakingSaturday, speakerList]
  )

  const speakerListFiltered = isLoading ? [] : newSpeakerList

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday)
  }

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault()
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value)
    // const favSpeakersList = speakerList.map((item) => {
    //   if (item.id === sessionId) {
    //     item.favorite = favoriteValue
    //     return item
    //   }
    //   return item
    // })
    dispatch({ type: favoriteValue ? 'favorite' : 'unfavorite', sessionId })
    //console.log("changing session favorte to " + favoriteValue);
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <title>Speakers</title>
      </Head>
      <Header />
      <Menu />
      <div className="container">
        {context.showSpeakerSpeakingDays && (
          <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(({ id, firstName, lastName, bio, favorite }) => {
              return (
                <SpeakerDetail
                  key={id}
                  id={id}
                  favorite={favorite}
                  onHeartFavoriteHandler={heartFavoriteHandler}
                  firstName={firstName}
                  lastName={lastName}
                  bio={bio}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers
