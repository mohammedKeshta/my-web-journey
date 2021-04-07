import Link from "next/link"

function ClientsPage() {
  return (
    <>
      <h1>Clients Page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/clients/mohammed">client zanaty</Link>
        </li>
      </ul>
    </>
  )
}

export default ClientsPage
