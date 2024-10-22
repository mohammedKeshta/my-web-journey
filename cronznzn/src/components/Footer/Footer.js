/*eslint-disable*/
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// material-ui core components
import { List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'

import styles from 'assets/jss/material-kit-react/components/footerStyle.js'

const useStyles = makeStyles(styles)

export default function Footer(props) {
  const classes = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          made with <Favorite className={classes.icon} /> by{' '}
          <a
            href="https://www.linkedin.com/in/mohammedelzanaty129/"
            className={aClasses}
            target="_blank"
          >
            Mohammed Elzanaty
          </a>{' '}
          for a better World - &copy; {1900 + new Date().getYear()}.
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
}
