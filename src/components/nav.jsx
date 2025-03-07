import { useState } from "react";
import "./nav.css";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <button onClick={() => toggleDropdown("hoteles")}>
            Hoteles & Resorts ▼
          </button>
          {openDropdown === "hoteles" && (
            <ul className="dropdown-menu">
              <li><button onClick={() => alert("Hotel 1 seleccionado")}>Hotel 1</button></li>
              <li><button onClick={() => alert("Hotel 2 seleccionado")}>Hotel 2</button></li>
              <li><button onClick={() => alert("Resort 1 seleccionado")}>Resort 1</button></li>
            </ul>
          )}
        </li>

        <li>
          <button onClick={() => toggleDropdown("destinos")}>
            Destinos ▼
          </button>
          {openDropdown === "destinos" && (
            <ul className="dropdown-menu">
              <li><button onClick={() => alert("Playa seleccionado")}>Playa</button></li>
              <li><button onClick={() => alert("Montaña seleccionado")}>Montaña</button></li>
              <li><button onClick={() => alert("Ciudad seleccionado")}>Ciudad</button></li>
            </ul>
          )}
        </li>

        <li>
          <button onClick={() => toggleDropdown("contacto")}>
            Contacto ▼
          </button>
          {openDropdown === "contacto" && (
            <ul className="dropdown-menu">
              <li><button onClick={() => alert("Teléfono seleccionado")}>Teléfono</button></li>
              <li><button onClick={() => alert("Email seleccionado")}>Email</button></li>
              <li><button onClick={() => alert("Formulario seleccionado")}>Formulario</button></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
