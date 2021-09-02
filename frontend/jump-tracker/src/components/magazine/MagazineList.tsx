import { useFetchMagazineList } from "lib/hook/useFetchMagazine";
import { Table } from "react-bootstrap";

const MaagzineList = () => {
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
          </tr>
        </thead>
        <tbody>
          {data &&
            data.magazines.map((magazine) => {
              return (
                <tr>
                  <td>{magazine.title}</td>
                  <td>
                    <a href={magazine.url}>公式サイト</a>
                  </td>
                  <td>{magazine.nextReleaseDate}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default MaagzineList;
