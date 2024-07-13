"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TransactionFormProps, TransactionParams } from "@/types";
import {  updateTransaction } from "@/lib/actions/transaction.actions";
import "./styles.css";

const TransactionForm = ({ userId }: TransactionFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<TransactionParams>({
    date: "",
    walletName1: "",
    wallet: "",
    amount: "",
    givingType: "",
    comments: "",
    crmStatus: "",
    walletName2: "",
    name: "",
    group: "",
    subgroup: "",
    fellowship: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const transactionId = searchParams.get("transactionId");
    if (transactionId) {
      const params: TransactionParams = {
        date: searchParams.get("date") || "",
        walletName1: searchParams.get("walletName1") || "",
        wallet: searchParams.get("wallet") || "",
        amount: searchParams.get("amount") || "",
        givingType: searchParams.get("givingType") || "",
        comments: searchParams.get("comments") || "",
        crmStatus: searchParams.get("crmStatus") || "",
        walletName2: searchParams.get("walletName2") || "",
        name: searchParams.get("name") || "",
        group: searchParams.get("group") || "",
        subgroup: searchParams.get("subgroup") || "",
        fellowship: searchParams.get("fellowship") || "",
      };
      setFormData(params);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof TransactionParams]) {
        newErrors[key] = "This field is required";
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
        const updatedTransaction = await updateTransaction({
          ...formData,
          transactionId: searchParams.get("transactionId")|| "",
        });
        if (updatedTransaction) {
          router.push("/");
        }
      
    } catch (error) {
      console.error("Error submitting transaction:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {Object.keys(formData).map((key) => (
        <div key={key} className="form-group flex flex-col">
          <label htmlFor={key} className="form-label mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          {key === "date" ? (
            <input
              type="date"
              id={key}
              name={key}
              value={formData[key as keyof TransactionParams]}
              onChange={handleChange}
              className="form-control p-2 border border-gray-300 rounded"
            />
          ) : key === "comments" ? (
            <textarea
              id={key}
              name={key}
              value={formData[key as keyof TransactionParams]}
              onChange={handleChange}
              className="form-control p-2 border border-gray-300 rounded h-24"
            />
          ) : (
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key as keyof TransactionParams]}
              onChange={handleChange}
              className="form-control p-2 border border-gray-300 rounded"
            />
          )}
          {errors[key] && <p className="error-message text-red-500 text-sm mt-1">{errors[key]}</p>}
        </div>
      ))}
      <button type="submit" disabled={isSubmitting} className="submit-button col-span-full p-2 bg-blue-500 text-white rounded">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default TransactionForm;
