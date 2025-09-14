// src/components/Layout.js

import React from 'react';
// Kita akan buat Navbar dan Footer nanti di file terpisah
// import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;