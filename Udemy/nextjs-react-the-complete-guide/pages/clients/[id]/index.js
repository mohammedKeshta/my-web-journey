import Link from "next/link"
import { useRouter } from "next/router"

function ClientProjectsPage() {
  const router = useRouter()

  function handleGetProjectDetails() {
    // load data ....
    router.push("/clients/project_1/projct_1_detils")
  }

  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <h1>Client Projects Page</h1>
      <button onClick={handleGetProjectDetails}>load project a</button>
    </>
  )
}

export default ClientProjectsPage
