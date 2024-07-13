"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Transaction from "../database/models/transaction.model";
import { redirect } from "next/navigation";
import { TransactionParams } from "@/types";


// ADD DATA
export async function addTransaction(newTransaction: TransactionParams) {
  try {
    await connectToDatabase();

    const createdTransaction = await Transaction.create(newTransaction)

    revalidatePath("/transactions");

    return JSON.parse(JSON.stringify(createdTransaction));
  } catch (error) {
    handleError(error)
  }
}



export async function updateTransaction(transactionData: TransactionParams) {
  try {
    await connectToDatabase();

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionData.dataId,
      transactionData,
      { new: true }
    )

    revalidatePath("/transactions");

    return JSON.parse(JSON.stringify(updatedTransaction));
  } catch (error) {
    handleError(error)
  }
}

// GET DATA
export async function getAllTransaction({userId }: {
  userId: string;
}) {
  try {
    await connectToDatabase();
    
    const transactions = await Transaction.find({ userId });

  
    return {
      data: JSON.parse(JSON.stringify( transactions))
    };
  } catch (error) {
    handleError(error);
  }
}




export async function deleteTransaction(transactionId: string) {
  try {
    await connectToDatabase();

    await Transaction.findByIdAndDelete(transactionId);
  } catch (error) {
    handleError(error)
  } finally{
    redirect('/transactions')
  }
}
