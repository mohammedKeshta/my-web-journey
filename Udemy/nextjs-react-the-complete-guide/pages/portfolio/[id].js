import { useRouter } from "next/router"
import Link from "next/link"

function PortfolioProjectPage() {
  const {
    query: { id },
  } = useRouter()
  return (
    <>
      <h1>Portfolio Project {id} Page</h1>

      <Link href="/portfolio">Portfolio</Link>
    </>
  )
}

export default PortfolioProjectPage
