import { Navigation } from '@/components/navigation/navigation.component';
import Footer from '@/components/navigation/footer.component';
import SideMenu from '@/components/menu/SideMenu';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { getUser } from '@/app/lib/user';

export default async function UserLayout({children}: {children: React.ReactNode}) {

  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user?.email as string);

  return (
    <div className="sm:grid sm:grid-rows-index-layout min-h-screen relative">

      <div className="h-11 sm:h-9 text-sm">
        <Navigation username={user?.name as string}/>
      </div>

      <div className="w-full sm:grid sm:grid-cols-mainbody text-base">
        <div className='hidden sm:block sm:w-44'>
          <SideMenu />
        </div>
        <div className='w-full pb-16 sm:pb-10 py-10 px-4 mx-auto max-w-7xl'>
          {children}
        </div>
      </div>

      <div className='footer h-168px sm:h-9 text-sm'>
        <Footer />
      </div>
    </div>
  )
}
