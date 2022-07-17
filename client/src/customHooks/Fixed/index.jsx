import { useState, useSyncExternalStore } from 'react'
export const Fixed = () => {
  const [isFixed, setIsFixed] = useState(false)
  const subscribe = (callback) => {
    window.addEventListener('scroll', callback)
    return () => {
      window.removeEventListener('scroll', callback)
    }
  }
  const getSnapshot = () => {
    const newShowFixed = window.scrollY > 200
    isFixed !== newShowFixed && setIsFixed(newShowFixed)
  }
  useSyncExternalStore(subscribe, getSnapshot)
  return {isFixed}
}
