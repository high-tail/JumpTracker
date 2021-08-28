import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="primary" variant="light" className="text-light menu">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="/">ジャンプ・トラッカー</Navbar.Brand>
        </Container>
      </Navbar>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/home"
        className="bg-light justify-content-center menu"
      >
        <Nav.Item>
          <NavLink to="/" activeClassName="nav-link active" className="nav-link" exact>
            HOME
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/list" activeClassName="nav-link active" className="nav-link" exact>
            一覧
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
