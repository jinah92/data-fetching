import { useEffect, useState } from 'react'
import { firestore } from '../firebase'

function LastSalesPage() {
  const [sales, setSales] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const transformedSales = []
    setIsLoading(true)

    const bucket = firestore.collection('sales')
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          const { username, volume } = doc.data()
          transformedSales.push({ username, volume })
        }
      })
      setSales(transformedSales)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <p>Loading ...</p>
  }

  if (!sales) {
    return <p>No data</p>
  }

  return (
    <ul>
      {sales.map((sale, idx) => (
        <li key={idx}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export default LastSalesPage
