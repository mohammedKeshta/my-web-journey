import { NotificationManager } from 'react-notifications'

const ERROR_TYPE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}

const APIErrorHandling = (statusCode, errorMessage) => {
  // Server or connection error happened
  if (!navigator.onLine) {
    // Handle offline error
    NotificationManager.error('No Internet Connection', 'Error')
  } else {
    const msg = ', ' + errorMessage
    // Handle Http Error (error.status === 403, 404...)
    switch (statusCode) {
      case ERROR_TYPE.BAD_REQUEST:
        NotificationManager.error(`Bad Request ${msg}`, 'Error')
        break
      case ERROR_TYPE.UNAUTHORIZED:
        NotificationManager.error(`Unauthorized ${msg}`, 'Error')
        break
      case ERROR_TYPE.NOT_FOUND:
        NotificationManager.error(`Not Found ${msg}`, 'Error')
        break
      case ERROR_TYPE.FORBIDDEN:
        NotificationManager.error(`Forbidden ${msg}`, 'Error')
        break
      case ERROR_TYPE.INTERNAL_SERVER_ERROR:
        NotificationManager.error(`Internal Server Error ${msg}`, 'Error')
        break
      default:
        break;
    }
  }
}
export default APIErrorHandling
