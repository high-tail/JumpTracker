import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="justify-content-center mt-5">
      <h2 className="p-2 bg-light">ジャンプ・トラッカーとは？</h2>
      <div className="p-2 bg-white">
        お気に入りの漫画が次週掲載されるか，単行本発売日がいつなのかを知ることができる．
      </div>
    </Container>
  )
}