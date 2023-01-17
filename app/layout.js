import Navbar from "./components/Navbar";
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
