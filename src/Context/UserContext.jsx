import React, { createContext, useState, useEffect } from "react";
import { useQueryClient, useMutation } from "react-query";
import { POST__LOGIN, POST__REGISTER } from "../api/PublicApi";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  const loginMutation = useMutation(
    async (data) => {
      const response = await POST__LOGIN(data);
      return response;
    },
    {
      onSuccess: (data) => {
        setUser(data?.data);
        localStorage.setItem("user", JSON.stringify(data?.data));
        queryClient.invalidateQueries("user");
        toast.success("Login Successfully");
      },
      onError: (error) => {
        toast.error("Login failed. Please check your credentials.");
      },
    }
  );

  const registerMutation = useMutation(
    async (data) => {
      const response = await POST__REGISTER(data);
      return response;
    },
    {
      onSuccess: (data) => {
        toast.success("Account created successfully!");
      },
      onError: (error) => {
        toast.error("Registration failed. Try again.");
      },
    }
  );

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    queryClient.invalidateQueries("user");
    toast.info("Logged out successfully.");
  };

  useEffect(() => {
    const storedUser = localStorage?.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loginMutation, registerMutation, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
