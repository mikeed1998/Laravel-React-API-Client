// App.tsx
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { AboutPage, ContactPage, HomePage } from './components';


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}