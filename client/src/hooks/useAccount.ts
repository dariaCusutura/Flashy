import { AuthContext } from "@/AuthProvider";
import { BACKEND_URL } from "@/constants";
import { UpdateAccountDTO } from "@/dtos/updateAccountDto";
import Cookies from "js-cookie";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function useAccount() {
  const { logout } = useContext(AuthContext);

  const updateAccount = async (id?: string, data?: UpdateAccountDTO) => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useAccount/updateAccount]: No token found");
        toast.error("You must be logged in to update account");
        logout();
      }
      const response = await fetch(`${BACKEND_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const { message } = await response.json();
      if (response.ok) {
        console.log(`[useAccount/updateAccount]: ${message} `);
        toast.success(`${message}. Log in again to continue`);
        logout();
      } else if (response.status === 400) {
        console.error("[useAccount] Failed to update account:", message);
        return message;
      } else {
        console.error("[useAccount] Failed to update account:", message);
        toast.error(`Could not update account - ${message}`);
        logout();
      }
    } catch (error) {
      console.error("[useAccount] Failed to update account:", error);
    }
  };

  const deleteAccount = async (id?: string) => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        console.error("[useAccount/updateAccount]: No token found");
        toast.error("You must be logged in to delete account");
        logout();
      }
      const response = await fetch(`${BACKEND_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = await response.json();
      if (response.ok) {
        toast.success(message);
        logout();
      } else {
        console.error(
          `[useAccount/deleteAccount]: Failed to delete account:`,
          message
        );
        toast.error(`Could not delete account - ${message}`);
      }
    } catch (error) {
      console.error("[useAccount] Failed to delete account:", error);
    }
  };

  return { updateAccount, deleteAccount };
}
