"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TransactionFormProps,
  TransactionParams,
} from "@/types";
import { addTransaction } from "@/lib/actions/transaction.actions";

const TransactionForm = ({userId }: TransactionFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState<TransactionParams>({
    transactionId: data?.transactionId || "",
    date: data?.date || "",
    walletName1: data?.walletName1 || "",
    wallet: data?.wallet || "",
    amount: data?.amount || "",
    givingType: data?.givingType || "",
    comments: data?.comments || "",
    crmStatus: data?.crmStatus || "",
    walletName2: data?.walletName2 || "",
    name: data?.name || "",
    group: data?.group || "",
    subgroup: data?.subgroup || "",
    fellowship: data?.fellowship || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const newTransaction = await addTransaction({
        ...formData,
        userId,
      });
      if (newTransaction) {
        setFormData({
          transactionId: "",
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
        router.push("/");
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {Object.keys(formData).map((key) => (
        <div key={key} className="form-group">
          <label htmlFor={key} className="form-label">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          <input
            type="text"
            id={key}
            name={key}
            value={formData[key as keyof TransactionParams]}
            onChange={handleChange}
            className="form-control"
          />
          {errors[key] && <p className="error-message">{errors[key]}</p>}
        </div>
      ))}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default TransactionForm;
