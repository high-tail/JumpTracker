import { Container } from "react-bootstrap";

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
    </>
  );
}
