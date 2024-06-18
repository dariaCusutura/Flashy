import { AuthContext } from "@/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { BACKEND_URL } from "@/constants";

export default function useAddStack(title: string) {
  const { logout } = useContext(AuthContext);
  const addStack = async () => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useDeleteStack]: No token found");
        toast.error("You must be logged in to add stacks");
        logout();
        return;
      }

      const response = await fetch(`${BACKEND_URL}/stacks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(`[useAddStack]: ${data.message}`);
        if (title) toast.success("Stack added successfully");
      } else if (response.status === 400) {
        console.error(`[useAddStack]: ${data.message}`);
        return data.message;
      }
    } catch (error) {
      console.error(`[useAddStack] Failed to add stack:, ${error}`);
      toast.error("Failed to add stack");
    }
  };
  return addStack;
}
