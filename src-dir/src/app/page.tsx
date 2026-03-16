export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "2rem",
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "0.5rem" }}>
        Thrive Chiropractic
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#7f8c8d", marginBottom: "2rem" }}>
        Site Under Construction
      </p>
      <div style={{
        width: "60px",
        height: "4px",
        backgroundColor: "#3498db",
        borderRadius: "2px",
        marginBottom: "2rem",
      }} />
      <p style={{ color: "#95a5a6", maxWidth: "400px", lineHeight: "1.6" }}>
        We&apos;re working hard to bring you something great. Check back soon!
      </p>
    </div>
  );
}
