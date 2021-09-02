import { useFetchComicList } from "lib/hook/useFetchComic";
import ShowMagazine from "components/magazine/ShowMagazine";
import { Table } from "react-bootstrap";

const ComicList = () => {
  const { data, error, loading } = useFetchComicList();

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
          </tr>
        </thead>
        <tbody>
          {data &&
            data.comics.map((comic) => {
              return (
                <tr>
                  <td>{comic.title}</td>
                  <td>
                    <a href={comic.url}>公式サイト</a>
                  </td>
                  <td>
                    <ShowMagazine magazineId={Number(comic.magazineId)} />
                  </td>
                  <td>{comic.nextReleaseDate}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default ComicList;
