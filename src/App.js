import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Graphics from './pages/Graphics/Graphics.js';
import WebApps from './pages/WebApps/WebApps.js';
import Layout from './Layout.js';
import './App.css';

function App() {
  return (
    <Router> {/* Wrap everything within the Router component */}
      <Routes>
        <Route index
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/webapps"
          element={
            <Layout>
              <WebApps />
            </Layout>
          }
        />
        <Route
          path="/graphics"
          element={
            <Layout>
              <Graphics />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
