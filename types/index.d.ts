/* eslint-disable no-unused-vars */
import { TransactionDocument } from "@/lib/database/models/trip.model";
import { Control } from "react-hook-form";

// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};


declare type TransactionParams = {
  transactionId?: string,
  userId?: string,
  date: string,
  walletName1: string,
  wallet: string,
  amount: string,
  givingType: string,
  comments: string,
  crmStatus: string,
  walletName2: string,
  name: string,
  group: string,
  subgroup: string,
  fellowship: string
};

declare type TransactionFormProps = {
  userId: string;
};


declare type CustomFieldProps = {
  control: Control<TransactionParams>; // Specify the type here
  render?: (props: { field: any }) => React.ReactNode; // Adjust as necessary
  name: keyof TransactionParams; // Ensure this matches the keys of TransactionParams
  formLabel?: string;
  className?: string;
  placeholder?: string;
};