import axios from 'axios'

function Home({ products }) {
  return <>home</>
}

export async function getServerSideProps() {
  const URL = 'http://localhost:3000/api/products'
  const {
    data: { data: products },
  } = await axios.get(URL)
  return {
    props: { products },
  }
}

export default Home
