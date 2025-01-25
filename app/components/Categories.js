export default function Categories({ onSelectCategory }) {
  const categories = [
    { name: 'Semua', img: '/img/all.jpg' },
    { name: 'Makanan', img: '/img/makanan.jpg' },
    { name: 'Minuman', img: '/img/minuman.jpg' },
    { name: 'Kerajinan', img: '/img/kerajinan.jpg' },
    { name: 'Pakaian', img: '/img/pakaian.jpg' },
  ];

  return (
    <section
      id="kategori"
      style={{
        textAlign: 'center',
        padding: '6rem 2rem',
        backgroundColor: '#f3f4f6',
        
        borderBottom: '2px solid #ddd',
        borderRadius: '16px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#222',
          marginBottom: '3rem',
          letterSpacing: '1.5px',
        }}
      >
        Pilih Kategori Oleh-Oleh
      </h2>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          listStyle: 'none',
          padding: 0,
          flexWrap: 'wrap',
        }}
      >
        {categories.map((category, index) => (
          <li
            key={index}
            style={{
              textAlign: 'center',
              width: '200px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              borderRadius: '20px',
            }}
            onClick={() => onSelectCategory(category.name)}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
            >
              <img
                src={category.img}
                alt={category.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </div>
            <p
              style={{
                marginTop: '1rem',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#333',
              }}
            >
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}