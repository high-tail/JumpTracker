import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../style/header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="danger" variant="light" className="text-light">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="/">ジャンプ・トラッカー</Navbar.Brand>
        </Container>
      </Navbar>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/home"
        className="bg-light justify-content-center"
      >
        <Nav.Item>
          <NavLink to="/" activeClassName="nav-link active" className="nav-link" exact>
            ホーム
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/jump" activeClassName="nav-link active" className="nav-link" exact>
            週刊少年ジャンプ
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/jump-sq" activeClassName="nav-link active" className="nav-link" exact>
            ジャンプSQ
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/young-jump" activeClassName="nav-link active" className="nav-link" exact>
            週刊ヤングジャンプ
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/favorites" activeClassName="nav-link active" className="nav-link" exact>
            お気に入り
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
}
