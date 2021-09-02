import React from "react";
import { useFetchYoungJumpComicList } from "lib/hook/useFetchComic";
import { Table } from "react-bootstrap";

const YoungJumpComicList = () => {
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
          </tr>
        </thead>
        <tbody>
          {data &&
            data.comics.map((comic) => (
              <tr>
                <td>{comic.title}</td>
                <td>
                  <a href={comic.url}>公式サイト</a>
                </td>
                <td>{comic.nextReleaseDate}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default YoungJumpComicList;