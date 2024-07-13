import { Schema, model, models } from "mongoose";

export interface TransactionDocument extends Document {
    _id: string,
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
    fellowship: string,
    userId: string
  }

const TransactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
    date: String,
    walletName1: String,
    wallet: String,
    amount: String,
    givingType: String,
    comments: String,
    crmStatus: String,
    walletName2: String,
    name: String,
    group: String,
    subgroup: String,
    fellowship: String
});

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;