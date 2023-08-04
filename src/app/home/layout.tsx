import { Navigation } from '@/components/navigation/navigation.component';
import Footer from '@/components/navigation/footer.component';
import SideMenu from '@/components/menu/SideMenu';

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="sm:grid sm:grid-rows-index-layout min-h-screen relative">

      <div className="h-11 sm:h-9 text-sm">
        <Navigation/>
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
