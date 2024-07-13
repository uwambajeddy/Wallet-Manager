import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {

  const { userId } = auth();
  if (!userId) redirect('/sign-in');

  let user = await getUserById(userId);
      

  

  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      <Toaster user={user} />
    </main>
  )
}

export default Layout