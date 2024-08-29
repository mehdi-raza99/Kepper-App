import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Created By Mehdi Raza</p>
    </footer>
  );
}

export default Footer;
