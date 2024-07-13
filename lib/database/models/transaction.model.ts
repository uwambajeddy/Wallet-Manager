import { Schema, model, models } from "mongoose";

export interface TransactionDocument extends Document {
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
  }

const TransactionSchema = new Schema({
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