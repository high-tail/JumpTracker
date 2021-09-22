import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { signOut } from "lib/api/auth";

import { AuthContext } from "App";

const Header: React.FC = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const histroy = useHistory();

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        histroy.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const AuthButtons = () => {
    // 認証完了後はサインアウト用のボタンを表示
    // 未認証時は認証用のボタンを表示
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button
            color="inherit"
            className="btn-primary"
            onClick={handleSignOut}
          >
            ログアウト
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Button>
        );
      }
      return (
        <Button href="/login" color="inherit" className="btn-primary">
          ログイン
          <FontAwesomeIcon icon={faSignInAlt} />
        </Button>
      );
    }
    return <></>;
  };

  return (
    <>
      <Navbar bg="primary" variant="light" className="text-light menu">
        <Container className="d-flex">
          <Navbar.Brand href="/">
            <span className="text-white">JumpTracker</span>
          </Navbar.Brand>
          <AuthButtons />
        </Container>
      </Navbar>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/home"
        className="bg-light justify-content-center menu"
      >
        <Nav.Item>
          <NavLink
            to="/"
            activeClassName="nav-link active"
            className="nav-link"
            exact
          >
            HOME
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/list"
            activeClassName="nav-link active"
            className="nav-link"
            exact
          >
            一覧
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/jump"
            activeClassName="nav-link active"
            className="nav-link"
            exact
          >
            週刊少年ジャンプ
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/jump-sq"
            activeClassName="nav-link active"
            className="nav-link"
            exact
          >
            ジャンプSQ
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/young-jump"
            activeClassName="nav-link active"
            className="nav-link"
            exact
          >
            週刊ヤングジャンプ
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/favorites"
            activeClassName="nav-link active"
            className="nav-link"
            exact
          >
            お気に入り
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
