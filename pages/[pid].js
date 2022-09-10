import fs from 'fs/promises'
import path from 'path'
import { Fragment } from 'react'

function ProductDetailPage(props) {
  const { product } = props

  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const json = await fs.readFile(filePath)
  const products = JSON.parse(json).products

  const product = products.find((product) => product.id === productId)

  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: 'p1' } }],
    fallback: 'blocking'
  }
}

export default ProductDetailPage
