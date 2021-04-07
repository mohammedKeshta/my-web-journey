import Link from "next/link"

function PortfolioPage() {
  return (
    <>
      <h1>Portfolio Page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio/1">Portfolio Project</Link>
        </li>
      </ul>
    </>
  )
}

export default PortfolioPage
