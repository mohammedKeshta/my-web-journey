import Link from "next/link"

function BlogPage() {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog/23/2/blog">23/2 Blog</Link>
        </li>
        <li>
          <Link href="/blog/23/2/2/blog">23/2/2 Blog</Link>
        </li>
      </ul>
    </>
  )
}

export default BlogPage
