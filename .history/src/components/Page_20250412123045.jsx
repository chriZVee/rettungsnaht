import Header from "./Header";
import Footer from "./Footer";

export default function Page({ title, children }) {
  return (
    <>
      <Header />
      <div className="content container">
        {title && <h1 className="page-title">{title}</h1>}
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
