export default function ContactForm() {
    return (
      <section
        id="kontak"
        style={{
          padding: '4rem 2rem',
          backgroundColor: '#F4F6F9', // Light gray background for a clean look
          borderTop: '2px solid #ccc',
        }}
      >
        <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
          fontFamily: "'Poppins', sans-serif",
          color: '#2F4F4F',
        }}
        >
          Hubungi Kami
        </h2>
        <form
          action="https://formspree.io/f/your-form-id" // Ganti dengan ID Formspree Anda
          method="POST"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '500px',
            margin: '0 auto',
            padding: '2.5rem',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            required
            style={{
              padding: '0.8rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1.1rem',
              transition: 'border-color 0.3s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#2E8B57')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Anda"
            required
            style={{
              padding: '0.8rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1.1rem',
              transition: 'border-color 0.3s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#2E8B57')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
          <textarea
            name="message"
            placeholder="Pesan Anda"
            rows="6"
            required
            style={{
              padding: '0.8rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '1.1rem',
              transition: 'border-color 0.3s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#2E8B57')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: '0.9rem 2rem',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '10px', // More rounded for a softer look
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease, transform 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2E8B57')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2E8B57')}
            onClick={(e) => e.target.style.transform = 'scale(1.05)'}
            onAnimationEnd={(e) => e.target.style.transform = 'scale(1)'}
          >
            Kirim Pesan
          </button>
        </form>
      </section>
    );
  }