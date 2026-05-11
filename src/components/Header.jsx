function Header() {
  return (
    <div style={styles.header}>
      <div>About</div>
      <div>Store</div>

      <div style={styles.right}>
        <div>Gmail</div>
        <div>Images</div>
        <button style={styles.btn}>Sign in</button>
      </div>
    </div>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    fontSize: '14px'
  },
  right: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center'
  },
  btn: {
    background: '#1a73e8',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
}

export default Header