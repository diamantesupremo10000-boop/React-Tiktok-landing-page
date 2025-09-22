function App() {
  const sections = [
    {
      title: "🚀 Haz crecer tu negocio",
      text: "Una landing page moderna estilo TikTok capta la atención y conecta con más clientes en segundos."
    },
    {
      title: "📱 Prioridad en móvil",
      text: "Diseñada para la experiencia en smartphone, donde hoy ocurren la mayoría de compras online."
    },
    {
      title: "💡 E-commerce potente",
      text: "Transmite valor claro: más clientes, más ventas y más confianza para tu negocio digital."
    },
    {
      title: "🎯 Acción inmediata",
      text: "Convierte visitantes en compradores con una presentación atractiva y optimizada."
    }
  ];

  return (
    <div className="container">
      {sections.map((sec, index) => (
        <div className="card" key={index}>
          <h1>{sec.title}</h1>
          <p>{sec.text}</p>
          {index === sections.length - 1 && (
            <button onClick={() => alert("¡Gracias por tu interés!")}>
              Contáctanos
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);