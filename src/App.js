import React from 'react';
import './components/assetes/styles/style.css';
import Footer from './components/footer/Footer';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';

function App() {
  return (
    <div className="d-block d-sm-none">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
