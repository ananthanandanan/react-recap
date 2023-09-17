import { useState } from 'react'

function Content () {
    const [name, setName] = useState("Ron");
    const [count, setCount] = useState(0);
    const handleNameChange = () => {
        const name = ["Ron", "Kevin", "jacob"]
        const int = Math.floor(Math.random() * name.length)
        setName(name[int])
      }
    const handleCountChange = () => {
        setCount(count + 1)
      }

  return (
    <main className="content">
        <button onClick={handleNameChange}>Change Name</button>
      <p>Hello {name}</p>
        <button onClick={handleCountChange}>Change Count</button>
        <p>Count: {count}</p>
    </main>
  )
}

export default Content