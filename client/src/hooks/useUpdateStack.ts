import { useContext } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { BACKEND_URL } from "@/constants";
import { AuthContext } from "@/AuthProvider";

export default function useUpdateStack() {
  const { logout } = useContext(AuthContext);

  const updateStack = async (id: string, title?: string, saved?: boolean) => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useUpdateStack]: No token found");
        toast.error("You must be logged in to update stacks");
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
      console.error(`[useUpdateStack] Failed to update stack:, ${error}`);
      toast.error("Failed to update stack");
    }
  };
  return updateStack;
}
