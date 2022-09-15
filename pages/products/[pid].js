import fs from 'fs/promises'
import path from 'path'
import { Fragment } from 'react'

function ProductDetailPage(props) {
  const { product } = props

  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const json = await fs.readFile(filePath)
  const data = JSON.parse(json)

  return data
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid
  const data = await getData()

  const product = data.products.find((product) => product.id === productId)

  if (!product) {
    return { notFound: true }
  }

  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  const data = await getData()
  const ids = data.products.map((product) => product.id)
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }))

  return {
    paths: pathsWithParams,
    fallback: true
  }
}

export default ProductDetailPage
