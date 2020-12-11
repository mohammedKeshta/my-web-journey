import React from 'react'

import './Cards.module.scss'
import CountUp from 'react-countup'
import Moment from 'react-moment';


// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/cardStyle.js'
const useStyles = makeStyles(styles)

const Cards = ({ lastUpdate, totalDeaths, totalConfirmed, totalRecovered }) => {
  const classes = useStyles()
  return (
    <div>
      {totalDeaths && (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>COVID-19 CORONAVIRUS PANDEMIC</h2>
              <h5 className={classes.description}>
                <strong>Last updated:</strong> {" "}
                <Moment format="D MMM YYYY HH:mm">
                  {lastUpdate}
                </Moment>
              </h5>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            </GridItem>
          </GridContainer>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea title="Coronavirus Cases" number={totalConfirmed.value} numberType='normal' />
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea title="Recovered" number={totalRecovered.value} numberType="recovered"/>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <InfoArea title="Deaths" number={totalDeaths.value} numberType="death" />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cards
