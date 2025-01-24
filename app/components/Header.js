export default function Header() {
  return (
    <header
      style={{
        backgroundColor: '#3a393c',
        color: '#fff',
        padding: '1.5rem 3rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: '2.8rem',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          CitaRasaID
        </h1>
        <nav>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '2.5rem',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            {['Kategori', 'Produk', 'Kontak'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    fontWeight: '500',
                    textTransform: 'capitalize',
                    position: 'relative',
                    paddingBottom: '0.2rem',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                  onMouseOut={(e) => (e.target.style.color = '#fff')}
                >
                  {item}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: '#FFD700',
                      transition: 'width 0.3s ease',
                    }}
                    className="underline"
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
