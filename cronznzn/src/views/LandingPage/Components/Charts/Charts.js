import React, { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchDaily } from '../../../../api/api'
import { APIErrorHandling } from '../../../../errors'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/cardStyle.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const classes = useStyles()
  const [dailyData, setDailyData] = useState({})

  const fetchData = async () => {
    try {
      // Get Summery
      let { data } = await fetchDaily()
      const dailyData = data.map(({ confirmed, deaths, reportDate: date }) => ({
        confirmed: confirmed.total,
        deaths: deaths.total,
        date,
      }))
      setDailyData(dailyData)
    } catch (e) {
      APIErrorHandling(e.statusCode, e.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['rgba(0, 0, 255, 0.5)', '#8ACA2B', '#f44336'],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => {
          const d = new Date(date)
          const dtf = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          })
          const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(d)
          return `${da}.${mo}`
        }),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#f44336',
            backgroundColor: '#f44336',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  return <div className={classes.section}>{country ? barChart : lineChart}</div>
}

export default Charts
