import React, { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import AlertMessage from "components/utils/AlertMessage";

import { AuthContext } from "App";

import { deleteUser } from "lib/api/auth";

const MyPage: React.FC = () => {
  const { loading, isSignedIn } = useContext(AuthContext);

  const { setIsSignedIn } = useContext(AuthContext);

  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [baseErrorMessage, setbaseErrorMessage] = useState<string>("");

  const histroy = useHistory();

  const handleUserDelete = async () => {
    try {
      const res = await deleteUser();

      if (res.status === 200) {
        // 成功した場合はCookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        histroy.push("/login");
      } else {
        setAlertMessageOpen(true);
        setbaseErrorMessage("予期せぬエラーです。もういちどやり直してください");
      }
    } catch (err) {
      setbaseErrorMessage("サーバに接続できませんでした");
      setAlertMessageOpen(true);
    }
  };

  const Title = () => (
    <>
      <div id="intro" className="intro-section pb-2 mb-5">
        <Container>
          <div className="row align-items-center text-white">
            <div className="col-md-8 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">マイページ</span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </>
  );

  if (!loading) {
    if (isSignedIn) {
      return (
        <>
          <Title />
          <Container>
            {alertMessageOpen && (
              <AlertMessage
                isOpen={alertMessageOpen}
                variant="danger"
                text="処理に失敗しました"
                error={baseErrorMessage}
                onClose={() => setAlertMessageOpen(false)}
              />
            )}
            <div>
              <Button
                onClick={handleUserDelete}
                className="rounded-pill btn-rounded border-primary col-4"
              >
                アカウント削除
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Button>
            </div>
          </Container>
        </>
      );
    }
    return (
      <>
        <Title />
        <Container>
          <div className="row text-center">
            <h3 className="display-3 fw-bold">ログインが必要です</h3>
          </div>

          <div className="row pt-5 pb-2 mt-0 mb-3">
            <div className="bg-white p-3">
              <div className="d-flex justify-content-center">
                <Button
                  href="/login"
                  className="rounded-pill btn-rounded border-primary col-4"
                >
                  ログイン
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
  return <>LOADING...</>;
};

export default MyPage;
