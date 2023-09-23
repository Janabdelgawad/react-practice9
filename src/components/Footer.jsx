import React from "react";

function Footer() {
  const currentYear = new Date();
  const year = currentYear.getFullYear();

  return (
    <footer>
      <p>Copyrighted in {year}.</p>
    </footer>
  );
}

export default Footer;
