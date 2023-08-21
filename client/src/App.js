import React from 'react';
import './App.css'; // Make sure to import the corresponding CSS file
import Navbar from './assets/components/navbar/navbar';
import Home from './assets/components/Home/Home';
import Footer from './assets/components/footer/footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      {/* Add other components/pages as needed */}
      <Footer />
    </div>
  );
}

export default App;
