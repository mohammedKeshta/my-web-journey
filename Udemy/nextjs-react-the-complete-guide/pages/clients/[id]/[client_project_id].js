import { useRouter } from "next/router"
import Link from "next/link"

function SelectedClientProjectPage() {
  const {
    query: { client_project_id },
  } = useRouter()
  return (
    <>
      <h1>The project {client_project_id} page for a specific project</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </>
  )
}

export default SelectedClientProjectPage
