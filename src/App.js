import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Form from './components/Form';
import Hero from './components/Hero';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Reason from './components/Reason';

function App() {
  return (
    <div className="App">
      <header className="sticky top-0 bg-white shadow-sm z-20">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Reason />
        <Form />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
