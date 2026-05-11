function Footer() {
  return (
    <div style={styles.footer}>
      <div>India</div>

      <div style={styles.row}>
        <span>Advertising</span>
        <span>Business</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>
    </div>
  )
}

const styles = {
  footer: {
    background: '#f2f2f2',
    padding: '15px',
    fontSize: '14px'
  },
  row: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px'
  }
}

export default Footer