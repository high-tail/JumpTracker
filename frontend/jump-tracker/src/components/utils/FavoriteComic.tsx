import React, { useState } from "react";
import { HeartFill } from "react-bootstrap-icons";
import Cookies from "js-cookie";

import { AxiosError } from "axios";
import client from "../../lib/api/client";

interface FavoritedComic {
  id: number | null;
  comicId: number;
}

interface IResponse {
  data: FavoritedComic | null;
  error: AxiosError | null;
}

type FavoriteComicPropsType = {
  comicId: number;
  favoriteId: number;
};

const FavoriteComic: React.FC<FavoriteComicPropsType> = ({
  comicId,
  favoriteId,
}) => {
  const [id, setId] = useState<number | null>(favoriteId);
  const handleFavorite = () => {
    if (id === null) {
      client
        .post<FavoritedComic>(
          `/users/favorite_comics`,
          { comicId },
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
        .delete<FavoritedComic>(`/users/favorite_comics/${id}`, {
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

export default FavoriteComic;
