import { AuthContext } from "@/AuthProvider";
import { BACKEND_URL } from "@/constants";
import Cookies from "js-cookie";
import { useContext } from "react";
import toast from "react-hot-toast";

const useDeleteStack = (id: string): (() => Promise<void>) => {
  const { logout } = useContext(AuthContext);

  const deleteStack = async (): Promise<void> => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useDeleteStack]: No token found");
        toast.error("You must be logged in to delete stacks");
        logout();
        return;
      }

      const response = await fetch(`${BACKEND_URL}/stacks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        toast.success(data.message);
        console.log(`[useDeleteStack]: ${data.message}`);
      } else {
        console.error(`[useDeleteStack]: ${data.message}`);
        toast.error(`${data.message}`);
        logout();
      }
    } catch (error) {
      console.error(`[useDeleteStack] Failed to delete stack:, ${error}`);
      toast.error("Failed to delete stack");
    }
  };

  return deleteStack;
};

export default useDeleteStack;
