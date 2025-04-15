import Header from "./Header";
import Footer from "./Footer";

export default function Page({ title, children }) {
  return (
    <>
      <Header />
      <div className="content container">
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
