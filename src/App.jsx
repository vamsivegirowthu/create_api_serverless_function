import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"

// Home Component
function Home() {
  return <h1>Home Page</h1>
}

// About Component
function About() {
  return <h1>About Page</h1>
}

function App() {
  const [count, setCount] = useState(0)

  // ✅ Environment variable
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <>
            <h1>Get started</h1>

            {/* Env Variable Display */}
            <h2>API KEY: {apiKey ?? "undefined"}</h2>

            <button onClick={() => setCount(count + 1)}>
              Count is {count}
            </button>
          </>
        } />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App