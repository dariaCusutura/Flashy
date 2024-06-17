import { AuthContext } from "@/AuthProvider";
import { useContext } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { BACKEND_URL } from "@/constants";

export default function useUpdateStack(
  id: string,
  title?: string,
  saved?: boolean
) {
  const { logout } = useContext(AuthContext);

  const updateStack = async () => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useDeleteStack]: No token found");
        toast.error("You must be logged in to delete stacks");
        logout();
        return;
      }

      const response = await fetch(`${BACKEND_URL}/stacks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, saved }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(`[useUpdateStack]: ${data.message}`);
        if (title) toast.success("Title updated successfully");
      } else if (response.status === 400) {
        console.error(`[useUpdateStack]: ${data.message}`);
        return data.message;
      }
    } catch (error) {
      console.error(`[useUpdateStack] Failed to updaye stack:, ${error}`);
      toast.error("Failed to update stack");
    }
  };
  return updateStack;
}
