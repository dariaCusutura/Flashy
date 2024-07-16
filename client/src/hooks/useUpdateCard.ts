import { useContext } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { BACKEND_URL } from "@/constants";
import { AuthContext } from "@/AuthProvider";

export default function useUpdateCard() {
  const { logout } = useContext(AuthContext);

  const updateCard = async (
    id: string,
    stack: string,
    question?: string,
    answer?: string,
    label?: string
  ) => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useUpdateCard]: No token found");
        toast.error("You must be logged in to update cards");
        logout();
        return;
      }

      const response = await fetch(`${BACKEND_URL}/cards/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ question, answer, stack, label }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(`[useUpdateCard]: ${data.message}`);
        toast.success("Card updated successfully");
      } else if (response.status === 400) {
        console.error(`[useUpdateCard]: ${data.message}`);
        return data.message;
      }
    } catch (error) {
      console.error(`[useUpdateCard] Failed to update card:, ${error}`);
      toast.error("Failed to update card");
    }
  };
  return updateCard;
}
