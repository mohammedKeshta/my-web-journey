import {
  dangerColor,
  grayColor,
  title,
} from 'assets/jss/material-kit-react.js'

const infoStyle = {
  infoArea: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '0px',
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: 'hidden',
  },
  title,
  description: {
    color: grayColor,
    fontWeight: 'bold',
    overflow: 'hidden',
    marginTop: '0px',
    fontSize: '40px',
  },
  normal: {
    color: '#696969'
  },
  recovered: {
    color: '#8ACA2B'
  },
  death: {
    color: dangerColor
  }
}

export default infoStyle
