import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import client from "../api/client";

export interface Magazine {
  magazines: Array<{
    id: number;
    title: string;
    url: string;
    nextReleaseDate: string;
  }>;
}

export interface IResponse {
  data: Magazine | null;
  error: AxiosError | null;
  loading: boolean;
}

// 雑誌一覧を取得
export const useFetchMagazineList = () => {
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
      .get<Magazine>("magazines/index")
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
