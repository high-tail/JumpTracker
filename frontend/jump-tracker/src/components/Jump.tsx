import { Container } from "react-bootstrap";

export default function Jump() {
  return (
    <Container className="justify-content-center mt-5">
      <h2 className="p-2 bg-light">週刊少年ジャンプ</h2>
      <div className="p-2 bg-white">
        お気に入りの漫画が次週掲載されるか，単行本発売日がいつなのかを知ることができる．
      </div>
      <h2 className="p-2 bg-light">連載一覧</h2>
    </Container>
  )
}