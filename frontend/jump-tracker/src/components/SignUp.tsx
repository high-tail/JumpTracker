import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "App";
import AlertMessage from "components/utils/AlertMessage";
import { signUp } from "lib/api/auth";
import { SignUpData } from "interfaces/index";

const SignUp: React.FC = () => {
  const history = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [baseErrorMessage, setBaseErrorMessage] = useState<string>("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data: SignUpData = {
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    try {
      const res = await signUp(data);
      console.log(res);

      if (res.status === 200) {
        // アカウント作成と同時にサインインさせてしまう
        // TODO: メール確認などを挟む
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        history.push("/");

        console.log("Signed in successfully!");
      } else {
        setAlertMessageOpen(true);
        setValidated(true);
      }
    } catch (err) {
      console.log(err);
      setAlertMessageOpen(true);

      if (err.status === 401) {
        setBaseErrorMessage("ユーザが存在しません");
      }
    }
  };

  return (
    <Container>
      {alertMessageOpen && (
        <AlertMessage // エラーが発生した場合はアラートを表示
          isOpen={alertMessageOpen}
          variant="danger"
          text="ログインに失敗しました"
          error={baseErrorMessage}
          onClose={() => setAlertMessageOpen(false)}
        />
      )}
      <Form noValidate validated={validated}>
        <Card className="mt-2" border="primary">
          <Card.Header as="h3" bsPrefix="card-header form-section">
            <div className="form-2">
              <span className="form-2--intro text-white">新規登録</span>
            </div>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-2--label">メールアドレス</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-2--label">パスワード</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-2--label">パスワード(確認)</Form.Label>
              <Form.Control
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                className="rounded-pill btn-rounded border-primary"
              >
                新規登録
                <span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </span>
              </Button>
            </Form.Group>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default SignUp;
