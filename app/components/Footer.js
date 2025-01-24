export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p style={styles.text}>© 2025 CitaRasaID. All rights reserved.</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '1.5rem',
      textAlign: 'center',
      marginTop: '3rem',
      borderTop: '2px solid #444',
    },
    text: {
      margin: 0,
      fontSize: '1.1rem',
    },
  };
  