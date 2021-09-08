import React from "react";
import { Table } from "react-bootstrap";

import { useFetchFavoriteComicList } from "lib/hook/useFetchComic";
import FavoriteComic from "components/utils/FavoriteComic";
import ShowMagazine from "components/magazine/ShowMagazine";

const FavoriteComicList: React.FC = () => {
  const { data, error, loading } = useFetchFavoriteComicList();

  if (loading) return <div>LOADING...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Table size="sm">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>公式サイトリンク</th>
            <th>連載雑誌</th>
            <th>次回発売日</th>
            <th>お気に入り</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.comics.map((comic) => (
              <tr key={comic.id}>
                <td>{comic.title}</td>
                <td>
                  <a href={comic.url}>公式サイト</a>
                </td>
                <td>
                  <ShowMagazine magazineId={Number(comic.magazineId)} />
                </td>
                <td>{comic.nextReleaseDate}</td>
                <td>
                  <FavoriteComic
                    favoriteId={comic.favoriteId}
                    comicId={comic.id}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default FavoriteComicList;
