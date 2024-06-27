import { AuthContext } from "@/AuthProvider";
import { BACKEND_URL } from "@/constants";
import Cookies from "js-cookie";
import { useContext } from "react";
import toast from "react-hot-toast";

const useDeleteCard = (id: string): (() => Promise<void>) => {
  const { logout } = useContext(AuthContext);

  const deleteCard = async (): Promise<void> => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useDeleteCard]: No token found");
        toast.error("You must be logged in to delete cards");
        logout();
        return;
      }

      const response = await fetch(`${BACKEND_URL}/cards/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        toast.success(data.message);
        console.log(`[useDeleteCard]: ${data.message}`);
      } else {
        console.error(`[useDeleteCard]: ${data.message}`);
        toast.error(`${data.message}`);
        logout();
      }
    } catch (error) {
      console.error(`[useDeleteCard] Failed to delete card:, ${error}`);
      toast.error("Failed to delete card");
    }
  };

  return deleteCard;
};

export default useDeleteCard;
