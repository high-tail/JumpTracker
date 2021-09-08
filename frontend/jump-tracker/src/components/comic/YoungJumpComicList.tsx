import React from "react";
import { useFetchYoungJumpComicList } from "lib/hook/useFetchComic";
import FavoriteComic from "components/utils/FavoriteComic";
import { Table } from "react-bootstrap";

const YoungJumpComicList: React.FC = () => {
  const { data, error, loading } = useFetchYoungJumpComicList();

  if (loading) return <div>LOADING...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Table size="sm">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>公式サイトリンク</th>
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

export default YoungJumpComicList;
