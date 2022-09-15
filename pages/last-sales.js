import { useEffect, useState } from 'react'
import { firestore } from '../firebase'

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales)
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

export async function getStaticProps() {
  const transformedSales = []

  const bucket = firestore.collection('sales')
  return bucket.get().then((docs) => {
    docs.forEach((doc) => {
      if (doc.exists) {
        const { username, volume } = doc.data()
        transformedSales.push({ username, volume })
      }
    })

    return { props: { sales: transformedSales } }
  })
}

export default LastSalesPage
