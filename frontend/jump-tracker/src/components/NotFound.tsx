import React from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-7 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">存在しないページです</span>
                <span className="display-2--description lh-base">
                  URLをご確認いただくか、もう一度やり直してください
                </span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
