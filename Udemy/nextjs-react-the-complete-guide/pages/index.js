import Link from "next/link"

function HomePage() {
  return (
    <>
      <h1>Hello World Next.JS</h1>
      <nav>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HomePage
