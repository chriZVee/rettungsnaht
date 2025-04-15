import Header from "../components/Header";
import Hero from "../components/Hero";
import Form from "../components/form/Form";
import ImageGallery from "../components/ImageGallery";
import DonationCounter from "../components/DonationCounter";
import About from "../components/About";
import Footer from "../components/Footer";
import Seam from "../components/Seam";
import seamHero from "../assets/seam-hero.svg?react";
import seamForm from "../assets/seam-form.svg?react";
import seamVerticalLeft from "../assets/seam-vertical-left.svg?react";
import seamAbout from "../assets/seam-about.svg?react";
import seamFooter from "../assets/seam-footer.svg?react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <Page title="Home">
      {/* Sections only */}

      <Hero />
      <Form />
      <Seam SVG={seamForm} />
      <ImageGallery />
      <Seam SVG={seamVerticalLeft} />
      <DonationCounter />
      <Seam SVG={seamAbout} />
      <About />
      <Seam SVG={seamFooter} />
    </Page>
  );
}
