import React, { useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Jump from "./components/Jump";
import JumpSq from "./components/JumpSq";
import List from "./components/List";
import Login from "./components/Login";
import SignUp from "components/SignUp";
import NotFound from "./components/NotFound";
import YoungJump from "./components/YoungJump";

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"


// グローバルで扱う変数・関数
// ログイン確認用
export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()

  // 認証済みのユーザーかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()
      console.log(res)

      if (res?.status === 200) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.currentUser)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser}}>
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
