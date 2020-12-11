import React, { useEffect, useState } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { NotificationContainer } from 'react-notifications'
import { Marker, StaticMap } from 'react-map-gl'
import DeckGL from '@deck.gl/react'

// @material-ui/icons
import RoomIcon from '@material-ui/icons/Room'

// core components
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'

import styles from 'assets/jss/material-kit-react/views/landingPage.js'

// Sections for this page
import { Cards, Charts, CountryPicker } from './Components'
import { fetchConfirmed, fetchSummery } from '../../api/api'
import { APIErrorHandling } from '../../errors'

const useStyles = makeStyles(styles)

const ACCESS_TOKEN =
  'pk.eyJ1IjoibW9oYW1tZWRlbHphbmF0eSIsImEiOiJjazgxajlraXAwNnJuM21wdDU4d2s3dGxhIn0.ZyJmk0qCoCLfKFFr608BGw'

export default function LandingPage(props) {
  const [summery, setSummery] = useState({})
  const [country, setCountry] = useState(null)
  const [markers, setMarkers] = useState(null)

  const [viewport, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: 23.4523429,
    longitude: 22.1167672,
    zoom: 4,
    minZoom: 1,
    maxZoom: 14,
    pitch: 12,
    bearing: 0,
    scrollZoom: true
  })
  const classes = useStyles()
  const { ...rest } = props

  const _onViewportChange = (viewport) => setViewPort({ ...viewport, transitionDuration: 3000 })

  const _renderCityMarker = (confirmed, lat, long, index) => {
    if (lat && long) {
      return (
        <Marker key={`marker-${index}`} longitude={long} latitude={lat}>
          <RoomIcon
            style={{ color: confirmed >= 100 ? '#f44336' : confirmed >= 10 ? '#3333ff' : 'gray' }}
          />
        </Marker>
      )
    }
    return null
  }

  const markersPins = (markers || []).map((marker, index) => {
    const { confirmed, lat, long } = marker
    return _renderCityMarker(confirmed, lat, long, index)
  })

  const handleCountryChange = async (country) => {
    setCountry(country)
  }

  const fetchData = async (country) => {
    try {
      // Get Summery
      let { data } = country ? await fetchSummery(country) : await fetchSummery()
      const { confirmed, recovered, deaths, lastUpdate } = data
      setSummery({
        confirmed,
        recovered,
        deaths,
        lastUpdate,
      })
    } catch (e) {
      APIErrorHandling(e.statusCode, e.message)
    }
  }

  const fetchMakers = async () => {
    try {
      // Get ConfirmedMarker
      let { data } = await fetchConfirmed()
      const mappedData = data.map(({ confirmed, lat, long }) => ({ confirmed, lat, long }))
      setMarkers(mappedData)
    } catch (e) {
      APIErrorHandling(e.statusCode, e.message)
    }
  }

  useEffect(() => {
    fetchData()
    fetchMakers()
  }, [])

  useEffect(() => {
    fetchData(country)
  }, [country])

  return (
    <div>
      <Header
        color="transparent"
        brand="CornZNZN-19"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/landing-bg.jpg')}>
        {markers && (
          <DeckGL  initialViewState={viewport} controller={true}>
            <StaticMap
              reuseMaps
              mapStyle="mapbox://styles/mapbox/dark-v10"
              preventStyleDiffing={true}
              mapboxApiAccessToken={ACCESS_TOKEN}
              onViewportChange={_onViewportChange}
              zoom={viewport.zoom}
            >
              {markersPins}
            </StaticMap>
          </DeckGL>
        )}
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Cards
            totalDeaths={summery.deaths}
            totalConfirmed={summery.confirmed}
            totalRecovered={summery.recovered}
            lastUpdate={summery.lastUpdate}
            handleCountryChange={handleCountryChange}
          />
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Charts data={summery} country={country} />
        </div>
      </div>
      <Footer />
      <NotificationContainer />
    </div>
  )
}
