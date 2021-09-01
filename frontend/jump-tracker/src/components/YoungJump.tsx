import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Serialization from "./Serialization";

export default function YoungJump() {
  return (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-8 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">週刊ヤングジャンプ</span>
              </h1>
              <Button
                variant="primary"
                className="btn-rounded rounded-pill"
                href="/login"
              >
                公式サイトへ
                <span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Serialization magazineId={Number(3)} />
    </>
  );
}
