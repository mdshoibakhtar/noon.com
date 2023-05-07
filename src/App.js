import React from 'react';
import './components/assetes/styles/style.css';
import Footer from './components/footer/Footer';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { Route, Routes } from 'react-router-dom';
import CategoriesComponentsAll from './components/mainSection/categoriesComponents/CategoriesComponentsAll';

function App() {
  return (
    <div className="d-block d-sm-none">
      <Header />
      <Routes>
        <Route path='/' element={<MainSection />} />
        <Route path="/category" element={<CategoriesComponentsAll />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
