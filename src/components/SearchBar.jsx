import { useState } from 'react'

function SearchBar() {
  const [input, setInput] = useState('')

  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search Google..."
      style={styles.input}
    />
  )
}

const styles = {
  input: {
    width: '500px',
    padding: '12px',
    borderRadius: '30px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '16px'
  }
}

export default SearchBar