import client from "../api/client";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

export interface Comic {
  comics: Array<{
    id: number;
    title: string;
    url: string;
    magazineId: string;
    nextReleaseDate: string;
  }>;
}

export interface IResponse {
  data: Comic | null;
  error: AxiosError | null;
  loading: boolean;
}

// マンガ一覧を取得
export const useFetchComicList = () => {
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
      .get<Comic>("comics/")
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};

// 連載マンガ一覧(ジャンプ)を取得
export const useFetchJumpComicList = () => {
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
      .get<Comic>("comics/1")
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};

// 連載マンガ一覧(ジャンプSQ)を取得
export const useFetchJumpSqComicList = () => {
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
      .get<Comic>("comics/2")
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};

// 連載マンガ一覧(ヤングジャンプ)を取得
export const useFetchYoungJumpComicList = () => {
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
      .get<Comic>("comics/3")
      .then((response) => {
        setRes({ data: response.data, error: null, loading: false });
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setRes({ data: null, error, loading: false });
      });
  };

  return res;
};
