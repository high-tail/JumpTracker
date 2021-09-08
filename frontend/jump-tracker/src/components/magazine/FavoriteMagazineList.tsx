import React from "react";
import { Table } from "react-bootstrap";

import { useFetchFavoriteMagazineList } from "lib/hook/useFetchMagazine";
import FavoriteMagazine from "components/utils/FavoriteMagazine";

const FavoriteMagazineList: React.FC = () => {
  const { data, error, loading } = useFetchFavoriteMagazineList();

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
            data.magazines.map((magazine) => (
              <tr key={magazine.id}>
                <td>{magazine.title}</td>
                <td>
                  <a href={magazine.url}>公式サイト</a>
                </td>
                <td>{magazine.nextReleaseDate}</td>
                <td>
                  <FavoriteMagazine
                    favoriteId={magazine.favoriteId}
                    magazineId={magazine.id}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default FavoriteMagazineList;
