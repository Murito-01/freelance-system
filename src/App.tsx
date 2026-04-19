import { useEffect, useState } from "react"
import { getClients, createClient } from "./services/clientService"

function App() {
  const [clients, setClients] = useState<any[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const fetchClients = async () => {
    const data = await getClients()
    setClients(data)
  }

  useEffect(() => {
    fetchClients()
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await createClient({ name, email })

    setName("")
    setEmail("")

    fetchClients()
  }

  return (
    <div>
      <h1>Clients</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Client</button>
      </form>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.name} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App