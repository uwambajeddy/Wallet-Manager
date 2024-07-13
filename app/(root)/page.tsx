import {TransactionsTable} from "@/components/shared/TransactionsTable"
import { navLinks } from "@/constants"
import { getAllTransaction } from "@/lib/actions/transaction.actions"
import { getUserById } from "@/lib/actions/user.actions"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Header from "@/components/shared/Header"

const Transactions = async () => {
  // const { userId } = auth();
  // if(!userId) redirect('/sign-in')
  //   let user = await getUserById(userId);
  // const transactions = await getAllTransaction({ userId: user?._id });
  

  return (
    <>
    <Header
       title="Dashboard"
       subtitle="The financial management super app for your church"

    />

    <section className="sm:mt-12">
      <TransactionsTable
        // hasTitle={false}
        // transactions={transactions?.data}
        // userId={user._id}
      />
    </section>
  </>
  )
}

export default Transactions