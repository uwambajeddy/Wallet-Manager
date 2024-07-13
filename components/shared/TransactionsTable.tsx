"use client";
import { deleteTransaction } from "@/lib/actions/transaction.actions";
import { TransactionDocument } from "@/lib/database/models/transaction.model";
import { useRouter } from "next/navigation";

export const TransactionsTable = ({
  transactions,
}: {
  transactions: TransactionDocument[];
  userId?: string;
  hasTitle?: boolean;
}) => {
  const router = useRouter();

  const handleDelete = async (transactionId: string) => {
    try {
      await deleteTransaction(transactionId);

      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (transaction: TransactionDocument) => {
    const queryParams = new URLSearchParams({
      transactionId: transaction._id,
      date: transaction.date,
      walletName1: transaction.walletName1,
      wallet: transaction.wallet,
      amount: transaction.amount.toString(),
      givingType: transaction.givingType,
      comments: transaction.comments,
      crmStatus: transaction.crmStatus,
      walletName2: transaction.walletName2,
      name: transaction.name,
      group: transaction.group,
      subgroup: transaction.subgroup,
      fellowship: transaction.fellowship,
    }).toString();
    router.push(`/edit?${queryParams}`);
  };

  const handleAddNew = () => {
    router.push("/create");
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col items-center">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Wallet Name 1</th>
            <th scope="col" className="px-6 py-3">Wallet</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Giving Type</th>
            <th scope="col" className="px-6 py-3">Comments</th>
            <th scope="col" className="px-6 py-3">CRM Status</th>
            <th scope="col" className="px-6 py-3">Wallet Name 2</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Group</th>
            <th scope="col" className="px-6 py-3">Subgroup</th>
            <th scope="col" className="px-6 py-3">Fellowship</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{transaction.date}</td>
              <td className="px-6 py-4">{transaction.walletName1}</td>
              <td className="px-6 py-4">{transaction.wallet}</td>
              <td className="px-6 py-4">${transaction.amount}</td>
              <td className="px-6 py-4">{transaction.givingType}</td>
              <td className="px-6 py-4">{transaction.comments}</td>
              <td className="px-6 py-4">{transaction.crmStatus}</td>
              <td className="px-6 py-4">{transaction.walletName2}</td>
              <td className="px-6 py-4">{transaction.name}</td>
              <td className="px-6 py-4">{transaction.group}</td>
              <td className="px-6 py-4">{transaction.subgroup}</td>
              <td className="px-6 py-4">{transaction.fellowship}</td>
              <td className="flex items-center px-6 py-4">
                <button
                  onClick={() => handleEdit(transaction)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(transaction._id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {transactions.length === 0 && (
        <button
          onClick={handleAddNew}
          className="submit-button w-80 mt-6 p-2 bg-blue-500 text-white rounded text-center"
        >
          Add a new transaction record
        </button>
      )}
    </div>
  );
};
