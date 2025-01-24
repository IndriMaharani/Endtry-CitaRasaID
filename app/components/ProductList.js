import { useState, useEffect } from 'react';

export default function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);  // Track product being edited
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '' });  // New product form state
  const [showModal, setShowModal] = useState(false);  // Control modal visibility

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'Semua'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Handle the edit action
  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({ name: product.name, category: product.category, price: product.price });
    setShowModal(true);
  };

  // Handle the delete action
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      try {
        const response = await fetch(`/api/products`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });

        if (!response.ok) {
          throw new Error('Failed to delete product');
        }

        setProducts(products.filter((product) => product.id !== id));  // Remove deleted product from state
      } catch (error) {
        setError(error.message);
      }
    }
  };

  // Handle creating a new product
  const handleCreateProduct = async () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      const createdProduct = await response.json();
      setProducts([...products, createdProduct]);  // Add the newly created product
      setNewProduct({ name: '', category: '', price: '' });  // Reset the form
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle updating an existing product
  const handleUpdateProduct = async () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingProduct.id, ...newProduct }),  // Include product ID for update
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const updatedProduct = await response.json();
      setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));  // Update the product in state
      setEditingProduct(null);  // Reset the editing state
      setShowModal(false); // Close the modal
      setNewProduct({ name: '', category: '', price: '' }); // Reset the form
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setEditingProduct(null); // Reset the editing state
    setNewProduct({ name: '', category: '', price: '' }); // Reset form state
  };

  return (
    <section id="produk" style={{ padding: '2rem', backgroundColor: '#f4f7fb', minHeight: '50vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'Arial, sans-serif' }}>Produk Oleh-Oleh</h2>

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '1.5rem',
                width: '250px',
                textAlign: 'center',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3 style={{ fontSize: '1.1rem', color: '#333' }}>{product.name}</h3>
              <p style={{ color: '#666' }}>Kategori: {product.category}</p>
              <p style={{ color: '#333', fontWeight: 'bold' }}>Harga: Rp {product.price}</p>

              <div style={{ marginTop: '1rem' }}>
                <button
                  onClick={() => handleEdit(product)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '0.5rem',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e53935'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No products found for this category.</p>
        )}
      </div>

      {/* Open Modal Button */}
      {/* Wrapper div for centering the button */}
<div style={{
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
}}>
  <button
    onClick={() => {
      setShowModal(true);
      setEditingProduct(null);  // Reset editing state when adding a new product
      setNewProduct({ name: '', category: '', price: '' });  // Reset form for new product
    }}
    style={{
      padding: '0.75rem 2rem',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '30%',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
  >
    Tambah Produk
  </button>
</div>


      {/* Modal for Create/Edit */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            minWidth: '300px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}>
            <h3 style={{ textAlign: 'center' }}>{editingProduct ? 'Edit Produk' : 'Tambah Produk'}</h3>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nama Produk</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Kategori Produk</label>
  <select
    value={newProduct.category}
    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
  >
    <option value="" disabled>Pilih Kategori</option>
    <option value="Makanan">Makanan</option>
    <option value="Minuman">Minuman</option>
    <option value="Pakaian">Pakaian</option>
    <option value="Kerajinan">Kerajinan</option>
  </select>
</div>


            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Harga Produk</label>
              <input
                type="text"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={editingProduct ? handleUpdateProduct : handleCreateProduct}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s',
                  marginRight: '1rem',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                {editingProduct ? 'Update Produk' : 'Tambah Produk'}
              </button>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e53935'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
