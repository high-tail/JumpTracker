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
import { signUp } from "lib/api/auth";
import { SignUpData } from "interfaces/index";

const SignUp: React.FC = () => {
  const history = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [baseErrorMessage, setbaseErrorMessage] = useState<string>("");

  const initialValues: SignUpData = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("メールアドレスの形式が不正です")
      .required("必須項目です"),
    password: Yup.string().required("必須項目です"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "パスワードが一致しません")
      .required("必須項目です"),
  });

  const handleSignUp = async (value: SignUpData) => {
    const data: SignUpData = {
      email: value.email,
      password: value.password,
      passwordConfirmation: value.passwordConfirmation,
    };

    try {
      const res = await signUp(data);

      if (res.status === 200) {
        // アカウント作成と同時にサインインさせてしまう
        // TODO: メール確認などを挟む
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers.client);
        Cookies.set("_uid", res.headers.uid);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        history.push("/");
      } else {
        setAlertMessageOpen(true);
        setbaseErrorMessage("失敗しました。もう一度やり直してください");
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
      onSubmit={(values) => handleSignUp(values)}
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
              text="新規作成に失敗しました"
              error={baseErrorMessage}
              onClose={() => setAlertMessageOpen(false)}
            />
          )}
          <Form noValidate onSubmit={handleSubmit}>
            <Card className="mt-2" border="primary">
              <Card.Header as="h3" bsPrefix="card-header form-section">
                <div className="form-2">
                  <span className="form-2--intro text-white">新規登録</span>
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="form-2--label">
                    パスワード(確認)
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="passwordConfirmation"
                    value={values.passwordConfirmation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={
                      !!(
                        touched.passwordConfirmation &&
                        errors.passwordConfirmation
                      )
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.passwordConfirmation}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="rounded-pill btn-rounded border-primary"
                  >
                    新規登録
                    <span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Button>
                </Form.Group>
              </Card.Body>
            </Card>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default SignUp;
