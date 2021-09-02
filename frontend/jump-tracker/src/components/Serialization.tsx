import React from "react";
import { Container } from "react-bootstrap";
import JumpComicList from "./comic/JumpComicList";
import JumpSqComicList from "./comic/JumpSqComicList";
import YoungJumpComicList from "./comic/YoungJumpComicList";

type MagazineIdPropsType = {
  magazineId: number;
};

export default function Serialization(props: MagazineIdPropsType) {
  return (
    <div>
      <Container>
        <div className="row text-center">
          <h3 className="display-3 fw-bold">連載一覧</h3>
          <div className="heading-line mb-1" />
        </div>
        <div className="p-3" />
        {(() => {
          switch (props.magazineId) {
            case 1:
              return <JumpComicList />;

            case 2:
              return <JumpSqComicList />;

            case 3:
              return <YoungJumpComicList />;

            default:
              return <div>--</div>;
          }
        })()}
      </Container>
    </div>
  );
}
