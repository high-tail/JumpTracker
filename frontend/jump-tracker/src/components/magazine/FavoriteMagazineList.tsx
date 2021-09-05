import React from "react";
import { Table } from "react-bootstrap";

import { useFetchFavoriteMagazineList } from "lib/hook/useFetchMagazine";

const FavoriteMagazineList: React.FC = () => {
  const { data, error, loading } = useFetchFavoriteMagazineList();

  if (loading) return <div>LOADING...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Table size="sm">
        <tbody>
          {data &&
            data.magazines.map((magazine) => (
              <tr key={magazine.id}>
                <td>{magazine.title}</td>
                <td>
                  <a href={magazine.url}>公式サイト</a>
                </td>
                <td>{magazine.nextReleaseDate}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default FavoriteMagazineList;
