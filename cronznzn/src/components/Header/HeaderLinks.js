/*eslint-disable*/
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow me on twitter"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/mohammdelzanaty"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/mohammedelzanaty129"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on LinkedIn"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/mohammedelzanaty129/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-linkedin'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on Github"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/mohammedelzanaty"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-github'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}
