import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { CustomFieldProps, TransactionFormProps, TransactionParams } from "@/types";
import { addTransaction } from "@/lib/actions/transaction.actions";

// Define your transaction parameters type
const formSchema = z.object({
  transactionId: z.string().optional(),
  date: z.string().nonempty(),
  walletName1: z.string().nonempty(),
  wallet: z.string().nonempty(),
  amount: z.string().nonempty(),
  givingType: z.string().nonempty(),
  comments: z.string().nonempty(),
  crmStatus: z.string().nonempty(),
  walletName2: z.string().nonempty(),
  name: z.string().nonempty(),
  group: z.string().nonempty(),
  subgroup: z.string().nonempty(),
  fellowship: z.string().nonempty(),
});

const TransactionForm = ({
  action,
  data,
  userId,
}: TransactionFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, formState, reset } = useForm<TransactionParams>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...data, // Populate form with data if updating
    },
  });

  const onSubmit = async (formData: TransactionParams) => {
    setIsSubmitting(true);

    try {
      const newTransaction = await addTransaction({
        ...formData,
        userId: userId,
      });

      if (newTransaction) {
        reset(); // Reset form after successful submission
        router.push("/transactions"); // Navigate to dashboard or appropriate page after submission
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* CustomField component for Date */}
      <CustomField
        control={control}
        name="date"
        formLabel="Date"
        placeholder="Enter date"
      />

      {/* CustomField component for Wallet Name 1 */}
      <CustomField
        control={control}
        name="walletName1"
        formLabel="Wallet Name 1"
        placeholder="Enter wallet name 1"
      />

      {/* CustomField component for Wallet */}
      <CustomField
        control={control}
        name="wallet"
        formLabel="Wallet"
        placeholder="Enter wallet"
      />

      {/* CustomField component for Amount */}
      <CustomField
        control={control}
        name="amount"
        formLabel="Amount"
        placeholder="Enter amount"
      />

      {/* CustomField component for Giving Type */}
      <CustomField
        control={control}
        name="givingType"
        formLabel="Giving Type"
        placeholder="Enter giving type"
      />

      {/* CustomField component for Comments */}
      <CustomField
        control={control}
        name="comments"
        formLabel="Comments"
        placeholder="Enter comments"
      />

      {/* CustomField component for CRM Status */}
      <CustomField
        control={control}
        name="crmStatus"
        formLabel="CRM Status"
        placeholder="Enter CRM status"
      />

      {/* CustomField component for Wallet Name 2 */}
      <CustomField
        control={control}
        name="walletName2"
        formLabel="Wallet Name 2"
        placeholder="Enter wallet name 2"
      />

      {/* CustomField component for Name */}
      <CustomField
        control={control}
        name="name"
        formLabel="Name"
        placeholder="Enter name"
      />

      {/* CustomField component for Group */}
      <CustomField
        control={control}
        name="group"
        formLabel="Group"
        placeholder="Enter group"
      />

      {/* CustomField component for Subgroup */}
      <CustomField
        control={control}
        name="subgroup"
        formLabel="Subgroup"
        placeholder="Enter subgroup"
      />

      {/* CustomField component for Fellowship */}
      <CustomField
        control={control}
        name="fellowship"
        formLabel="Fellowship"
        placeholder="Enter fellowship"
      />

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting || !formState.isValid}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

// CustomField component for reusable form field rendering
const CustomField = ({
  control,
  name,
  formLabel,
  placeholder,
}: CustomFieldProps) => {
  return (
    <div>
      <label>{formLabel}</label>
      <input {...control.register(name)} placeholder={placeholder} />
    </div>
  );
};

export default TransactionForm;
