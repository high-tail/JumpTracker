import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "App";
import AlertMessage from "components/utils/AlertMessage";
import { signIn } from "lib/api/auth";
import { SignInData } from "interfaces/index";

const Login: React.FC = () => {
  const history = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [baseErrorMessage, setBaseErrorMessage] = useState<string>("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(String(e.target.value));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(String(e.target.value));
  };

  const validateEmail = (email: string) => {
    if (email === "") {
      setEmailError("必須項目です");
    }
  };

  const validatePassword = (password: string) => {
    if (password === "") {
      setPasswordError("必須項目です");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: SignInData = {
      email: email,
      password: password,
    };

    try {
      const res = await signIn(data);
      console.log(res);

      if (res.status === 200) {
        // 成功した場合はCookieに各値を格納
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        history.push("/");

        console.log("Signed in successfully!");
      } else {
        setAlertMessageOpen(true);
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
      <Form noValidate onSubmit={handleSubmit}>
        <Card className="mt-2" border="primary">
          <Card.Header as="h3" bsPrefix="card-header form-section">
            <div className="form-2">
              <span className="form-2--intro text-white">ログイン</span>
            </div>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-2--label">メールアドレス</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={onChangeEmail}
                isValid={emailError !== ""}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-2--label">パスワード</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={onChangePassword}
                isValid={passwordError !== ""}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button
                variant="primary"
                type="submit"
                className="rounded-pill btn-rounded border-primary"
              >
                ログイン
                <span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </span>
              </Button>
              <div>
                <p className="pt-3">
                  まだ登録していない方は<a href="/signup">こちら</a>
                </p>
              </div>
            </Form.Group>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default Login;
