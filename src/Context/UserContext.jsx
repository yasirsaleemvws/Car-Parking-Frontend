import React, { createContext, useState, useEffect } from "react";
import { useQueryClient, useMutation } from "react-query";
import { API_POST__FORGET_PASSWORD, API_POST__LOGIN, API_POST__REGISTER, API_POST__RESET_PASSWORD, API_POST__VERIFY_OTP, } from "../api/PublicApi";

// Create the User context
const UserContext = createContext();

// Provide context to wrap the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();

  // 1. Login User Mutation
  const loginMutation = useMutation(
    async (data) => {
      const response = await API_POST__LOGIN(data);
      return response;
    },
    {
      onSuccess: (data) => {
        setUser(data?.data);
        localStorage.setItem("user", JSON.stringify(data?.data)); // Persist user
        queryClient.invalidateQueries("user"); // Refetch user if needed
      },
      onError: (error) => {
        console.error("Login error:", error);
      },
    }
  );

  // 2. Register User Mutation
  const registerMutation = useMutation(
    async (data) => {
      const response = await API_POST__REGISTER(data);
      return response;
    },
    {
      onSuccess: (data) => {
        // setUser(data?.data); // Save user to state
        // localStorage.setItem("user", JSON.stringify(data?.data)); // Persist user in local storage
        // queryClient.invalidateQueries("user"); // Refetch user if needed
      },
      onError: (error) => {
        console.error("Registration error:", error);
      },
    }
  );

  // 3. Forget User Mutation
  const forgetMutation = useMutation(
    async (data) => {
      const response = await API_POST__FORGET_PASSWORD(data);
      return response;
    },
    {
      onSuccess: (data) => {
      },
      onError: (error) => {
        console.error("Registration error:", error);
      },
    }
  );

  // 4. Verify OTP Mutation
  const verifyOtpMutation = useMutation(
    async (data) => {
      const response = await API_POST__VERIFY_OTP(data);
      return response;
    },
    {
      onSuccess: (data) => {
      },
      onError: (error) => {
        console.error("Registration error:", error);
      },
    }
  );

  // 5. Reset Password Mutation
  const resetPasswordMutation = useMutation(
    async (data) => {
      const response = await API_POST__RESET_PASSWORD(data);
      return response;
    },
    {
      onSuccess: (data) => {
      },
      onError: (error) => {
        console.error("Registration error:", error);
      },
    }
  );

  // 6. Logout User
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    queryClient.invalidateQueries("user");
  };

  // Load the user from local storage on app load
  useEffect(() => {
    const storedUser = localStorage?.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);


  // Provide context values
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginMutation,
        registerMutation,
        logout,
        loading,
        forgetMutation,
        verifyOtpMutation,
        resetPasswordMutation
      }}
    >
      {!loading && children}
    </UserContext.Provider>
  );
};

// Custom hook to use the User context
export const useUser = () => React.useContext(UserContext);
