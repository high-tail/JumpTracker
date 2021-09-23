import React from "react";
import { Container } from "react-bootstrap";

export default function Confirm() {
  return (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-7 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">
                  登録はまだ完了していません
                </span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div>
          <p className="row align-items-center">
            確認メールを送信しました。
            <br />
            メール内のリンクをクリックしたのち、ログインしてください。
          </p>
        </div>
      </Container>
    </>
  );
}
