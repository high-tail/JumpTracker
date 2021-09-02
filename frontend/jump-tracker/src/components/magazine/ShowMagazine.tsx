import React from "react";

type MagazineIdPropsType = {
  magazineId: number;
};

const ShowMagazine = (props: MagazineIdPropsType) => (
  <>
    {(() => {
      switch (props.magazineId) {
        case 1:
          return <div>週刊少年ジャンプ</div>;

        case 2:
          return <div>ジャンプSQ</div>;

        case 3:
          return <div>週刊ヤングジャンプ</div>;

        default:
          return <div>--</div>;
      }
    })()}
  </>
);

export default ShowMagazine;
