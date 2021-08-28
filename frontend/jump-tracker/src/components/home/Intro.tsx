import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Container, Button } from "react-bootstrap";

export default function Intro() {

  return (
    <div id="intro" className="intro-section pb-2 mb-5">
      <Container>
        <div className="row align-items-center text-white">
          <div className="col-md-12 intros text-start">
            <h1 className="display-2">
              <span className="display-2--intro">ジャンプ・トラッカーとは？</span>
              <span className="display-2--description lh-base">
                お気に入りの漫画が次週掲載されるか，単行本発売日がいつなのかを知ることができる．
              </span>
            </h1>
            <Button variant="primary" className="btn-rounded rounded-pill" href="/login">
              ログイン
              <span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}