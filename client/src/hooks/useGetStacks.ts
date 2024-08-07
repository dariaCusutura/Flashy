import { AuthContext } from "@/AuthProvider";
import { BACKEND_URL } from "@/constants";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { PaginationInfo } from "./useGetCards";

export interface Stack {
  _id: string;
  title: string;
  author: string;
  saved: boolean;
  cardsNumber: number;
}

export default function useGetStacks() {
  const [stacks, setStacks] = useState<Stack[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo
  );
  const [loadingStacks, setLoadingStacks] = useState<boolean>(true);
  const { logout } = useContext(AuthContext);

  const getStacks = async (
    page?: number,
    saved?: boolean,
    searchTerm?: string
  ) => {
    try {
      setLoadingStacks(true);
      const token = Cookies.get("access_token");

      let url = `${BACKEND_URL}/stacks?page=${page}`;
      if (saved) {
        url += `&saved=${saved}`;
      }
      if (searchTerm) {
        url += `&searchTerm=${searchTerm}`;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStacks(data.stacks);
        setPaginationInfo(data.pagination);
      } else if (response.status === 401) {
        console.error(`[useGetStacks]: Not authorised to get stacks`);
        toast.error("Not authorised to see stacks");
      }
    } catch (error) {
      console.error(`[useGetStacks] Failed to get stacks:`, error);
      toast.error("Failed to get stacks");
    } finally {
      setLoadingStacks(false);
    }
  };
  return { getStacks, stacks, paginationInfo, loadingStacks };
}
