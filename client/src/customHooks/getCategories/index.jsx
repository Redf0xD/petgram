import { useState, useEffect } from 'react'

export const getCategories = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setLoading(prev => !prev)
    fetch('https://petgram-with-react.vercel.app/categories').then(res => res.json()).then(json => {
      setCategories(json)
      setLoading(prev => !prev)
    })
  }, [])
  return { categories, loading }
}
