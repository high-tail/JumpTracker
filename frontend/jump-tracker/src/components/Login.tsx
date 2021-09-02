import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";
import Cookies from "js-cookie";

import { Formik } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "App";
import AlertMessage from "components/utils/AlertMessage";
import { signIn } from "lib/api/auth";
import { SignInData } from "interfaces/index";

const Login: React.FC = () => {
  const history = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [baseErrorMessage, setbaseErrorMessage] = useState<string>("");

  const initialValues: SignInData = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("メールアドレスの形式が不正です")
      .required("必須項目です"),
    password: Yup.string().required("必須項目です"),
  });

  const handleSignIn = async (value: SignInData) => {
    const data: SignInData = {
      email: value.email,
      password: value.password,
    };

    try {
      const res = await signIn(data);

      if (res.status === 200) {
        if (res.data.status === 200) {
          // 成功した場合はCookieに各値を格納
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers.client);
          Cookies.set("_uid", res.headers.uid);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);
          history.push("/");

          console.log("Signed in successfully!");
        } else if (res.data.status === 401) {
          setAlertMessageOpen(true);
          setbaseErrorMessage("該当するユーザが存在しません");
        } else {
          setAlertMessageOpen(true);
          setbaseErrorMessage(
            "予期せぬエラーです。もういちどやり直してください"
          );
        }
      }
    } catch (err) {
      setbaseErrorMessage("サーバに接続できませんでした");
      setAlertMessageOpen(true);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values) => handleSignIn(values)}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Container>
          {alertMessageOpen && (
            <AlertMessage
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
                  <Form.Label className="form-2--label">
                    メールアドレス
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!(touched.email && errors.email)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="form-2--label">パスワード</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!(touched.password && errors.password)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
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
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Button>
                  <div>
                    <p className="pt-3">
                      <a href="/signup">まだ登録していない方はこちら</a>
                    </p>
                  </div>
                </Form.Group>
              </Card.Body>
            </Card>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default Login;
