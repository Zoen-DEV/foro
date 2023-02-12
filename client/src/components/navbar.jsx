"use strict";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const links = [
    {
      path: "/",
      label: "INICIO",
    },
    {
      path: "/foro",
      label: "FORO",
    },
    {
      path: "/noticias",
      label: "NOTICIAS",
    },
  ];
  console.log(inputFocus);
  return (
    <nav>
      <div className="logo_container">
        <h1>Foro</h1>
      </div>
      <ul>
        {links.map(({ path, label }, index) => (
          <li key={`${label}-${index}`}>
            <Link href={path} className="link">
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button className="link">MAS</button>
        </li>
      </ul>
      <div
        className="search_container"
        onMouseLeave={() => setShowInput(!inputFocus ? false : showInput)}
      >
        <input
          type="text"
          placeholder="Busca por palabras clave"
          onFocus={() => setInputFocus(true)}
          onBlur={() => {
            setInputFocus(false);
            setShowInput(false);
          }}
          style={{
            display: !showInput ? "none" : "block",
          }}
        />
        <FaSearch
          onMouseOver={() => setShowInput(true)}
          className="lupa"
          style={{ color: inputFocus ? "#f59e0b" : "" }}
          onClick={(e) => {
            if (e.target.previousSibling) {
              setInputFocus(true);
              e.target.previousSibling.focus();
            }
          }}
        />
      </div>
      <Link href="/login" className="login_link">
        Inicia sesion
      </Link>
      <button className="menu_btn">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
