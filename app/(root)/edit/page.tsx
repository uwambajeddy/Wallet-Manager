import Header from '@/components/shared/Header'
import TransactionForm from '@/components/shared/TransactionUpdateForm';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const CreateTrip = async () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
    <>
      <Header 
         title="Edit transaction"
         subtitle="Fill in the form below to edit a transaction."
  
      />
    
      <section className="mt-10">
        <TransactionForm 
          userId={user._id}
        />
      </section>
    </>
  )
}

export default CreateTrip