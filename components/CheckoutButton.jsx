"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutButton = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await axios.post("/api/billing/create-checkout", {
        successUrl: `${window.location.href}/success`,
        cancelUrl: `${window.location.href}`,
      });

      window.location.href = response.data.url;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleSubscribe}>
      {isLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      Checkout
    </button>
  );
};

export default CheckoutButton;
