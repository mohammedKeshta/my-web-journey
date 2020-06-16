import React, { useRef, useState, useEffect } from 'react'

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null)

  const [inView, setInView] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    setInView(isInView());
    return () => {
      // clean up
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect()
      return rect.top >= 0 && rect.bottom <= window.innerHeight
    }
    return false
  }

  const scrollHandler = () => {
    setInView(() => isInView())
  }
  return (
    <img src={inView ? secondaryImg : primaryImg} alt="" ref={imageRef} width="200" height="200" />
  )
}

export default ImageToggleOnScroll
