import fs from 'fs/promises'
import Link from 'next/link'
import path from 'path'

function HomePage(props) {
  const { products } = props

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  )
}
export async function getStaticProps(context) {
  console.log('regenerating...')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const json = await fs.readFile(filePath)
  const products = JSON.parse(json).products

  if (!products) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (products.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products
    },
    revalidate: 10
  }
}

export default HomePage
