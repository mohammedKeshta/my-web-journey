import { useRouter } from "next/router"

function BlogPostPage() {
  const { query } = useRouter()
  return (
    <>
      <h1>BlogPostPage</h1>
      <pre>
        <code>{JSON.stringify(query, null, 2)}</code>
      </pre>
    </>
  )
}

export default BlogPostPage
