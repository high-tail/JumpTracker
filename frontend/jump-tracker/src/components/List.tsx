import React from "react";
import { Container } from "react-bootstrap";
import ComicList from "./comic/ComicList";

import MaagzineList from "./magazine/MagazineList";

export default function List() {
  return (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-8 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">一覧</span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="row text-center">
          <h3 className="display-3 fw-bold">雑誌一覧</h3>
          <div className="heading-line mb-1"></div>
        </div>
        <div className="p-3" />
        <MaagzineList />
        <div className="pt-5" />
        <div className="pt-5" />
        <div className="row text-center">
          <h3 className="display-3 fw-bold">連載マンガ一覧</h3>
          <div className="heading-line mb-1"></div>
        </div>
        <div className="p-3" />
        <ComicList />
      </Container>
    </>
  );
}
