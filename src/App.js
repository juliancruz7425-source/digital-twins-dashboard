import React, { useState } from "react";

function App() {
  // Estado para saber qué vista mostrar
  const [pagina, setPagina] = useState("inicio");

  // Función para mostrar el contenido según la página
  const renderContenido = () => {
    switch (pagina) {
      case "inventarios":
        return (
          <>
            <h3>📦 Inventarios</h3>
            <p>Aquí puedes gestionar productos, existencias y stock.</p>
          </>
        );
      case "recomendaciones":
        return (
          <>
            <h3>💡 Recomendaciones</h3>
            <p>Aquí puedes ver sugerencias basadas en los datos del sistema.</p>
          </>
        );
      case "logistica":
        return (
          <>
            <h3>🚚 Logística</h3>
            <p>Aquí puedes controlar envíos, rutas y entregas.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <header>
        <h1 style={{ color: "#111" }}>🚀 Digital Twins Dashboard</h1>
        <h2 style={{ color: "#007bff" }}>
          {pagina === "inicio"
            ? "Página Principal"
            : pagina.charAt(0).toUpperCase() + pagina.slice(1)}
        </h2>
        <hr
          style={{
            width: "60%",
            margin: "20px auto",
            border: "1px solid #ddd",
          }}
        />
      </header>

      {/* Vista principal */}
      {pagina === "inicio" && (
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Tarjeta Inventarios */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              width: "280px",
              padding: "20px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3>📦 Inventarios</h3>
            <p>Gestión de productos, existencias y stock en tiempo real.</p>
            <button
              onClick={() => setPagina("inventarios")}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              Ir a Inventarios
            </button>
          </div>

          {/* Tarjeta Recomendaciones */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              width: "280px",
              padding: "20px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3>💡 Recomendaciones</h3>
            <p>Sugerencias inteligentes basadas en datos y rendimiento.</p>
            <button
              onClick={() => setPagina("recomendaciones")}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              Ir a Recomendaciones
            </button>
          </div>

          {/* Tarjeta Logística */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              width: "280px",
              padding: "20px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3>🚚 Logística</h3>
            <p>Control de envíos, rutas y optimización de entregas.</p>
            <button
              onClick={() => setPagina("logistica")}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              Ir a Logística
            </button>
          </div>
        </main>
      )}

      {/* Vista dinámica */}
      {pagina !== "inicio" && (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            width: "400px",
            margin: "40px auto",
            padding: "30px",
          }}
        >
          {renderContenido()}
          <button
            onClick={() => setPagina("inicio")}
            style={{
              marginTop: "20px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            🔙 Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
}

export default App;