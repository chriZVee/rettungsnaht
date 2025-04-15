export default function Page({ title, children }) {
  return (
    <>
      <div className="page">
        {title && <h1 className="page-title">{title}</h1>}
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
