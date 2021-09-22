import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Container, Button, Image } from "react-bootstrap";

import List from "../../images/undraw_Bookshelves_re_lxoy.png";
import Like from "../../images/undraw_Loving_it_re_jfh4.png";

export default function LinkInfo() {
  const style = {
    width: "80%",
    height: "auto",
  };

  return (
    <Container>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div className="services__content">
            <h3 className="display-3--title mt-1">一覧</h3>
            <p className="lh-lg">
              一覧画面から，発売日が知りたい漫画・雑誌を探す．
              <br />
              雑誌から漫画を探すことも可能
            </p>
            <Button
              href="/list"
              className="rounded-pill btn-rounded border-primary"
            >
              一覧へ
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
          <div className="services__pic">
            <img src={List} alt="一覧" style={style} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
          <div className="services__pic">
            <img src={Like} alt="お気に入り" style={style} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div className="services__content">
            <h3 className="display-3--title mt-1">お気に入り</h3>
            <p className="lh-lg">
              お気に入り登録することで，発売日に通知を送ることができる．
            </p>
            <Button
              href="/favorites"
              className="rounded-pill btn-rounded border-primary"
            >
              お気に入りへ
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
