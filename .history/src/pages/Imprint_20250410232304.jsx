import Header from "../components/Header.jsx";

import Form from "../components/form/Form.jsx";

import Footer from "../components/Footer.jsx";
import Seam from "../components/Seam.jsx";
import seamHero from "../assets/seam-hero.svg?react";
import seamForm from "../assets/seam-form.svg?react";
import seamVerticalLeft from "../assets/seam-vertical-left.svg?react";
import seamAbout from "../assets/seam-about.svg?react";
import seamFooter from "../assets/seam-footer.svg?react";

export default function Imprint() {
  return (
    <>
      {/* Sections only */}
      <Header />
      <Hero />
      <Form />
      <Seam SVG={seamForm} />
      <ImageGallery />
      <Seam SVG={seamVerticalLeft} />
      <DonationCounter />
      <Seam SVG={seamAbout} />
      <About />
      <Seam SVG={seamFooter} />
      <Footer />
    </>
  );
}
