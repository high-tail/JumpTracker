import React, { useState } from "react";
import { HeartFill } from "react-bootstrap-icons";
import Cookies from "js-cookie";

import { AxiosError } from "axios";
import client from "../../lib/api/client";

interface FavoritedMagazine {
  id: number | null;
  magazineId: number;
}

interface IResponse {
  data: FavoritedMagazine | null;
  error: AxiosError | null;
}

type FavoriteMagazinePropsType = {
  magazineId: number;
  favoriteId: number;
};

const FavoriteMagazine: React.FC<FavoriteMagazinePropsType> = ({
  magazineId,
  favoriteId,
}) => {
  const [id, setId] = useState<number | null>(favoriteId);
  const handleFavorite = () => {
    if (id === null) {
      client
        .post<FavoritedMagazine>(
          `/users/favorite_magazines`,
          { magazineId },
          {
            headers: {
              "access-token": Cookies.get("_access_token"),
              client: Cookies.get("_client"),
              uid: Cookies.get("_uid"),
            },
          }
        )
        .then((response) => {
          setId(response.data.id);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    } else {
      client
        .delete<FavoritedMagazine>(`/users/favorite_magazines/${id}`, {
          headers: {
            "access-token": Cookies.get("_access_token"),
            client: Cookies.get("_client"),
            uid: Cookies.get("_uid"),
          },
        })
        .then((response) => {
          setId(null);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <HeartFill color={id ? "red" : "gray"} onClick={handleFavorite} />
    </>
  );
};

export default FavoriteMagazine;
