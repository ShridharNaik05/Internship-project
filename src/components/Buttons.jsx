function Buttons() {
  return (
    <div style={styles.container}>
      <button>Google Search</button>
      <button>I'm Feeling Lucky</button>
    </div>
  )
}

const styles = {
  container: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px'
  }
}

export default Buttons