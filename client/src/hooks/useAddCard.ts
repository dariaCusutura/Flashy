import { AuthContext } from "@/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { BACKEND_URL } from "@/constants";

export default function useAddCard(
  question: string,
  answer: string,
  stack: string,
  label?: string
) {
  const { logout } = useContext(AuthContext);
  const addCard = async () => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useAddCard]: No token found");
        toast.error("You must be logged in to add cards");
        logout();
        return;
      }

      const response = await fetch(`${BACKEND_URL}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ question, answer, stack, label }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(`[useAddCard]: ${data.message}`);
        toast.success("Card added successfully");
      } else if (response.status === 400) {
        console.error(`[useAddCard]: ${data.message}`);
        return data.message;
      }
    } catch (error) {
      console.error(`[useAddCard] Failed to add Card:, ${error}`);
      toast.error("Failed to add card");
    }
  };
  return addCard;
}
