import React from "react";
import { Container } from "react-bootstrap";

import '../style/footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <p className="text-muted">@2021 Takao</p>
        </Container>
      </footer>
    </>
  );
}
