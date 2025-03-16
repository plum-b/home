import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    fontFamily: '-apple-system, Barlow, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  };

  return (
    <footer className="mt-auto py-4 bg-light" style={footerStyle}>
      <Container className="text-center">
        <p className="mb-0">
          © 2025{" "}
          <a
            href="https://github.com/plum-b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            afifnahas
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
