import { Container } from "react-bootstrap";

export default function Favorites() {
  return (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-8 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">お気に入り</span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
