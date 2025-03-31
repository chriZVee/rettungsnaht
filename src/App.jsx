import "./App.css";
import "./styles/global.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Form from "./components/form/Form.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import DonationCounter from "./components/DonationCounter.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      {/* Sections only */}
      <Header />
      <Hero />
      <Form />
      <ImageGallery />
      <DonationCounter />
      <About />
      <Footer />
    </>
  );
}

export default App;
