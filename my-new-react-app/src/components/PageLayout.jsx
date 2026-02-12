function PageLayout({ title, children }) {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>{title}</h1>
      {children}
    </div>
  );
}

export default PageLayout;
