export default function Banner() {
<<<<<<< HEAD
  return (
    <section
      style={{
        backgroundImage: 'url(/img/bg.jpg)', // Menentukan gambar sebagai background
        backgroundSize: 'cover', // Mengatur gambar agar menutupi seluruh elemen
        backgroundPosition: 'center', // Memusatkan posisi gambar
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4rem 2rem',
        borderBottom: '2px solid #ccc',
        borderRadius: '8px',
        height: '70vh',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        color: '#fff', // Memberikan warna teks yang cocok dengan gambar
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Memberikan bayangan pada teks untuk keterbacaan
      }}
    >
      <div style={{ flex: 1, paddingLeft: '5rem' }}>
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            margin: 0,
            textAlign: 'left',
          }}
        >
          Selamat Datang di CitaRasaID
        </h2>
        <p
          style={{
            fontSize: '1.4rem',
            marginTop: '1rem',
            textAlign: 'left',
          }}
        >
          Temukan oleh-oleh khas daerah dengan harga terbaik!
        </p>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img
          src="/img/iconfood2.jpg"
          alt="Oleh-Oleh"
          style={{
            maxWidth: '70%',
            height: '50%',
            borderRadius: '36px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
    </section>
  );
}
=======
    return (
      <section
        style={{
          backgroundImage: 'url(/img/bg.jpg)', // Menentukan gambar sebagai background
          backgroundSize: 'cover', // Mengatur gambar agar menutupi seluruh elemen
          backgroundPosition: 'center', // Memusatkan posisi gambar
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4rem 2rem',
          borderBottom: '2px solid #ccc',
          borderRadius: '8px',
          height: '70vh',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          color: '#fff', // Memberikan warna teks yang cocok dengan gambar
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Memberikan bayangan pada teks untuk keterbacaan
        }}
      >
        <div style={{ flex: 1, paddingLeft: '5rem' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              margin: 0,
              textAlign: 'left',
            }}
          >
            Selamat Datang di CitaRasaID
          </h2>
          <p
            style={{
              fontSize: '1.4rem',
              marginTop: '1rem',
              textAlign: 'left',
            }}
          >
            Temukan oleh-oleh khas daerah dengan harga terbaik!
          </p>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img
            src="/img/iconfood2.jpg"
            alt="Oleh-Oleh"
            style={{
              maxWidth: '70%',
              height: '50%',
              borderRadius: '36px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      </section>
    );
  }
  
>>>>>>> 2ce73300eff5f9fb53a8361c50eaf5be7c0613c9
