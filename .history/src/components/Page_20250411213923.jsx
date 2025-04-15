import Header from "./header";
import Footer from "./footer";

export default function Page({ title, content }) {
  return (
    <>
      <Header />
      <div className="content container">
        {title && <h1 className="page-title">{title}</h1>}
        <div className="page-content">{content}</div>
      </div>
      <Footer />
    </>
  );
}
