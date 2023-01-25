//bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
//global styles
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "../styles/globals.css";
import "../styles/responsive.css";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
