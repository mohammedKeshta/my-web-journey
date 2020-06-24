const speakerReducer = (state, action) => {
  const updateFavorite = (favoriteValue) => {
    return state.map((speaker) => {
      if (speaker.id == action.sessionId) {
        speaker.favorite = favoriteValue
        return speaker
      }
      return speaker
    })
  }

  switch (action.type) {
    case 'setSpeakerList':
      return action.data
    case 'favorite':
      return updateFavorite(true)
    case 'unfavorite':
      return updateFavorite(false)
    default:
      return state
  }
}

export default speakerReducer
