import Header from "./Header";
import Footer from "./Footer";
import "../styles/page.css";

export default function Page({ children }) {
  return (
    <div className="page wrapper">
      <Header />
      <div className="content wrapper">
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
