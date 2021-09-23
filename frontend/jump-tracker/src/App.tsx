import React, { useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "components/SignUp";
import { getCurrentUser } from "lib/api/auth";
import { User } from "interfaces/index";
import Confirm from "components/utils/Confirm";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Jump from "./components/Jump";
import JumpSq from "./components/JumpSq";
import List from "./components/List";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import YoungJump from "./components/YoungJump";

// グローバルで扱う変数・関数
// ログイン確認用
export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: User | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  }
);

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  // 認証済みのユーザーかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      if (res?.data.status === 200) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.currentUser);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser().then(
      () => {
        // ハンドル処理はない
      },
      () => {
        // ハンドル処理はない
      }
    );
  }, [setCurrentUser]);

  return (
    <>
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/jump">
              <Jump />
            </Route>
            <Route path="/jump-sq">
              <JumpSq />
            </Route>
            <Route path="/young-jump">
              <YoungJump />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/confirm">
              <Confirm />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default App;
