import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main>
        <Hero />
        {/* Other sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
