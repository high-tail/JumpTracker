import React from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Serialization from "./Serialization";

export default function Jump() {
  return (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-7 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">週刊少年ジャンプ</span>
              </h1>
              <Button
                variant="primary"
                className="btn-rounded rounded-pill"
                href="https://www.shonenjump.com/j/"
              >
                公式サイトへ
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Serialization magazineId={Number(1)} />
    </>
  );
}
