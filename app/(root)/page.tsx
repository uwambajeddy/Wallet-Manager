import {TransactionsTable} from "@/components/shared/TransactionsTable"
import { navLinks } from "@/constants"
import { getAllTransaction } from "@/lib/actions/transaction.actions"
import { getUserById } from "@/lib/actions/user.actions"
import { auth } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const Transactions = async () => {
  const { userId } = auth();
  if(!userId) redirect('/sign-in')
    let user = await getUserById(userId);
  const transactions = await getAllTransaction({ userId: user?._id });
  

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
        The financial management super app for your church
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <TransactionsTable 
          hasTitle={true}
          userId={user?._id}
          transactions={transactions?.data}
        />
      </section>
    </>
  )
}

export default Transactions