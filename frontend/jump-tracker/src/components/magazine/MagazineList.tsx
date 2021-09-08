import React from "react";
import { useFetchMagazineList } from "lib/hook/useFetchMagazine";
import FavoriteMagazine from "components/utils/FavoriteMagazine";
import { Table } from "react-bootstrap";

const MaagzineList: React.FC = () => {
  const { data, error, loading } = useFetchMagazineList();

  if (loading) return <div>LOADING...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Table size="sm">
        <thead>
          <tr>
            <th>雑誌名</th>
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

export default MaagzineList;
