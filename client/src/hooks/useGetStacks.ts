import { AuthContext } from "@/AuthProvider";
import { BACKEND_URL } from "@/constants";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export interface PaginationInfo {
  previous_page: number;
  current_page: number;
  next_page: number;
  total_pages: number;
  records_on_page: number;
  total_records: number;
}

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
  const [loadingStacks, setLoadingStacks] = useState(false);
  const { logout } = useContext(AuthContext);

  const getStacks = async (
    page?: number,
    saved?: boolean,
    searchTerm?: string
  ) => {
    try {
      setLoadingStacks(true);
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useGetStacks]: No token found");
        toast.error("You must be logged in to access stacks");
        logout();
        return;
      }

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
        logout();
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
