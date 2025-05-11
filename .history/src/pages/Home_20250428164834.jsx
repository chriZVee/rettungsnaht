import Hero from "../components/Hero";
import Form from "../components/form/Form";
import ImageGallery from "../components/ImageGallery";
import DonationCounter from "../components/DonationCounter";
import About from "../components/About";
import Seam from "../components/Seam";
import seamHero from "../assets/seam-hero.svg?react";
import seamForm from "../assets/seam-form.svg?react";
import seamVerticalLeft from "../assets/seam-vertical-left.svg?react";
import seamAbout from "../assets/seam-about.svg?react";
import seamFooter from "../assets/seam-footer.svg?react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Page from "../components/Page";
import "../styles/home.css";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const hash = location.hash;

      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 0);
  }, [location.key]);

  return (
    <Page title="Home">
      {/* Sections */}
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
