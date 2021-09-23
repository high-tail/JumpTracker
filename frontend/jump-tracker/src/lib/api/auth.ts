import client from "lib/api/client";
import Cookies from "js-cookie";
import { AxiosResponse } from "axios";

import { SignUpData, SignInData } from "interfaces/index";

// サインアップ（新規アカウント作成）
export const signUp = (data: SignUpData): Promise<AxiosResponse> =>
  client.post("auth", data);

// サインイン（ログイン）
export const signIn = (data: SignInData): Promise<AxiosResponse> =>
  client.post("auth/sign_in", data);

// サインアウト（ログアウト）
export const signOut = (): Promise<AxiosResponse> =>
  client.delete("auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });

// 認証済みのユーザーを取得
export const getCurrentUser = (): Promise<AxiosResponse> =>
  client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });

// ユーザ削除
export const deleteUser = (): Promise<AxiosResponse> =>
  client.delete("auth", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
