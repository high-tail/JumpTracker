import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AxiosError } from "axios";
import client from "../api/client";

export interface Comic {
  comics: Array<{
    id: number;
    title: string;
    url: string;
    magazineId: string;
    nextReleaseDate: string;
    favoriteId: number;
  }>;
}

export interface IResponse {
  data: Comic | null;
  error: AxiosError | null;
  loading: boolean;
}

// マンガ一覧を取得
export const useFetchComicList = (): IResponse => {
  const [res, setRes] = useState<IResponse>({
    data: null,
    error: null,
    loading: false,
  });
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = () => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    client
      .get<Comic>("comics/", {
        headers: {
          "access-token": Cookies.get("_access_token"),
          client: Cookies.get("_client"),
          uid: Cookies.get("_uid"),
        },
      })
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};

// 連載マンガ一覧(ジャンプ)を取得
export const useFetchJumpComicList = (): IResponse => {
  const [res, setRes] = useState<IResponse>({
    data: null,
    error: null,
    loading: false,
  });
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = () => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    client
      .get<Comic>("comics/1", {
        headers: {
          "access-token": Cookies.get("_access_token"),
          client: Cookies.get("_client"),
          uid: Cookies.get("_uid"),
        },
      })
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};

// 連載マンガ一覧(ジャンプSQ)を取得
export const useFetchJumpSqComicList = (): IResponse => {
  const [res, setRes] = useState<IResponse>({
    data: null,
    error: null,
    loading: false,
  });
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = () => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    client
      .get<Comic>("comics/2", {
        headers: {
          "access-token": Cookies.get("_access_token"),
          client: Cookies.get("_client"),
          uid: Cookies.get("_uid"),
        },
      })
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};

// 連載マンガ一覧(ヤングジャンプ)を取得
export const useFetchYoungJumpComicList = (): IResponse => {
  const [res, setRes] = useState<IResponse>({
    data: null,
    error: null,
    loading: false,
  });
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = () => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    client
      .get<Comic>("comics/3", {
        headers: {
          "access-token": Cookies.get("_access_token"),
          client: Cookies.get("_client"),
          uid: Cookies.get("_uid"),
        },
      })
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};

// お気に入りマンガ一覧を取得
export const useFetchFavoriteComicList = (): IResponse => {
  const [res, setRes] = useState<IResponse>({
    data: null,
    error: null,
    loading: false,
  });
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = () => {
    setRes((prevState) => ({ ...prevState, loading: true }));
    client
      .get<Comic>("/users/favorite_comics", {
        headers: {
          "access-token": Cookies.get("_access_token"),
          client: Cookies.get("_client"),
          uid: Cookies.get("_uid"),
        },
      })
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};
