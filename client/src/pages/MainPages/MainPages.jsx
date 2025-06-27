import "./MainPages.style.css";

export default function MainPages() {
  return (
    <div className="main-steampunk-desc">
      <p
        style={{
          fontSize: "1.3rem",
          color: "#e6c07b",
          fontFamily: "Cinzel, serif",
          background: "rgba(44,34,18,0.7)",
          border: "2px dashed #b08d57",
          borderRadius: "14px",
          padding: "24px",
          margin: "40px auto",
          maxWidth: 600,
          boxShadow: "0 4px 16px #2c1d0e, 0 0 8px #b08d57 inset",
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        <span role="img" aria-label="шестерёнка">
          ⚙️
        </span>{" "}
        Описание тра-та-та <br />
        <span role="img" aria-label="лампочка">
          💡
        </span>{" "}
        тра-та-та <br />
        <span role="img" aria-label="очки">
          🧐
        </span>{" "}
      почти подвал
      </p>
    </div>
  );
}
