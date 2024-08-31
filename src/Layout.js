import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
