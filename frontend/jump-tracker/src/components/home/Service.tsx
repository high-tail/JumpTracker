import React from "react";
import { Container } from "react-bootstrap";

export default function Service() {
  return (
    <div>
      <Container>
        <div className="row text-center">
          <h1 className="display-3 fw-bold">主な機能</h1>
          <div className="heading-line mb-1" />
        </div>
        <div className="row pt-2 pb-2 mt-0 mb-3">
          <div className="col-md-6 border-right">
            <div className="bg-white p-3">
              <h2 className="fw-bold text-capitalize text-center">
                発売日を見逃さない
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 text-start">
              <p className="fw-light">
                ログインしてお気に入り登録することで，発売を通知できます．
                <br />
                ログインしなくても発売日を確認することができます．
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
