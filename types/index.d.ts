/* eslint-disable no-unused-vars */

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
  action: "Add" | "Update";
  userId: string;
  data?: TransactionDocument | null;
};

