import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "App";

const Favorites: React.FC = () => {
  const { loading, isSignedIn } = useContext(AuthContext);
  const Title = () => (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-8 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">お気に入り</span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </>
  );

  if (!loading) {
    if (isSignedIn) {
      return (
        <>
          <Title />
          <Container>
            <div className="row text-center">
              <h3 className="display-3 fw-bold">お気に入り一覧</h3>
              <div className="heading-line mb-1" />
            </div>
          </Container>
        </>
      );
    } 
      return (
        <>
          <Title />
          <Container>
            <div className="row text-center">
              <h3 className="display-3 fw-bold">ログインが必要です</h3>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                href="/login"
                className="rounded-pill btn-rounded border-primary col-4"
              >
                ログイン
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Button>
            </div>
            <div className="row pt-5 pb-2 mt-0 mb-3">
              <div className="col-md-6 border-right">
                <div className="bg-white p-3">
                  <h2 className="fw-bold text-capitalize text-center">
                    ログインすると...
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-white p-4 text-start">
                  <p className="fw-light">
                    お気に入り機能が利用でき，登録することで発売日を通知できます．
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </>
      );
    
  } 
    return (
      <>
        <Title />
        LOADING...
      </>
    );
  
};

export default Favorites;
