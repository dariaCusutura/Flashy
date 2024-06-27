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

export interface Flashcard {
  _id: string;
  question: string;
  answer: string;
  label: string;
  stack: string;
}

export default function useGetCards() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo
  );
  const [loadingCards, setLoadingCards] = useState<boolean>(true);
  const { logout } = useContext(AuthContext);

  const getCards = async (
    stack: string,
    page?: number,
    label?: string,
    searchTerm?: string
  ) => {
    try {
      setLoadingCards(true);
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useGetCards]: No token found");
        toast.error("You must be logged in to access cards");
        logout();
        return;
      }

      let url = `${BACKEND_URL}/cards?stack=${stack}&page=${page}`;
      if (label) {
        url += `&label=${label}`;
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
        setCards(data.cards);
        setPaginationInfo(data.pagination);
      } else if (response.status === 401 || response.status === 403) {
        console.error(`[useGetCards]: Not authorised to get these cards`);
        toast.error("Not authorised to see cards");
        logout();
      }
    } catch (error) {
      console.error(`[useGetCards] Failed to get cards:`, error);
      toast.error("Failed to get cards");
    } finally {
      setLoadingCards(false);
    }
  };
  return { getCards, cards, paginationInfo, loadingCards };
}
