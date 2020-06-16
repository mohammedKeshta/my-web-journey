import Link from 'next/link'

const Header = () => {
  return (
    <div className="container">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
      </nav>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        nav a {
          margin-right: 10px;
        }
      `}</style>
    </div>
  )
}

export default Header
