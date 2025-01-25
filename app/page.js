'use client';
import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Categories onSelectCategory={setSelectedCategory} />
        <ProductList selectedCategory={selectedCategory} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
