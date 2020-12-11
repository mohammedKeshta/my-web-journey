import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import styles from 'assets/jss/material-kit-react/components/infoStyle.js'
import CountUp from 'react-countup'
import cx from 'classnames'
const useStyles = makeStyles(styles)

export default function InfoArea(props) {
  const classes = useStyles()
  const { title, number, numberType } = props

  return (
    <div className={classes.infoArea}>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <CountUp
          className={cx(classes.description, classes[numberType])}
          start={0}
          end={number}
          duration={2.5}
          separator=","
        />
      </div>
    </div>
  )
}

InfoArea.defaultProps = {
  iconColor: 'gray',
}

InfoArea.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  numberType: PropTypes.string.isRequired,
}
