import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Container, Button, Image } from "react-bootstrap";

export default function LinkInfo() {
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
            <Image src="../../images/service-1.png" alt="一覧" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
          <div className="services__pic">
            <Image src="holder.js/171x180" alt="お気に入り" />
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
