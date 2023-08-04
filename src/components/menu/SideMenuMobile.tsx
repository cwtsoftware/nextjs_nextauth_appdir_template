"use client"
import * as React from 'react';
import { BsGrid, BsGridFill } from 'react-icons/bs';
import { Rephrase_icon } from '../logo/rephrase_icon';
import { Analyze_icon }  from '../logo/analyze_icon';
import { Summarize_icon } from '../logo/summarize_icon';
import { Compare_icon } from '../logo/compare_icon';
import Home_icon from '../logo/home_icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ISideMenuMobileProps {
}

const SideMenuMobile: React.FunctionComponent<ISideMenuMobileProps> = (props) => {

  const pathname = usePathname()

  return (
    <div className='bg-navBar text-nav-blur z-50 flex-col items-center shadow-costum-sm w-screen h-screen absolute top-11 left-0'>

      <div className='flex flex-col gap-6 p-2 transition-all ease-in-out 300ms'>
        <div className='flex flex-col justify-start gap-3'>
          
          <div className='pl-8'>
            <Link href={"/"} className={`
            ${pathname.endsWith('/') ? ("border-r-12px border-r-navBarFocus text-white") : ("border-none")}
            flex flex-row items-center gap-2 ml-0.5 py-0.5 hover:border-solid hover:border-r-12px hover:border-r-blue-700
            `}>
              <div className='py-0.5'>
                <Home_icon/>
              </div>
              <p className='text-base'>Home</p>
            </Link>
          </div>

          <div className='pl-8'>
            <Link href={"/saved/Queries"} className={`
            ${pathname.endsWith('/Queries') ? ("border-r-12px border-r-navBarFocus text-white") : ("border-none")}
            flex flex-row items-center gap-2 py-0.5 hover:border-solid hover:border-r-12px hover:border-r-blue-700
            `}>
              <div className='py-0.5'>
                <BsGrid size={28} />
              </div>
              <p className='text-base'>Saved Queries</p>
            </Link>
          </div>

          <div className='pl-8'>
            <Link href={"/saved/Results"} className={`
            ${pathname.endsWith('/Results') ? ("border-r-12px border-r-navBarFocus text-white") : ("border-none")}
            flex flex-row items-center gap-2 py-0.5 hover:border-solid hover:border-r-12px hover:border-r-blue-700
            `}>
              <div className='py-0.5'>
                <BsGridFill size={28}/>
              </div>
              <p className='text-base'>Saved Results</p>
            </Link>
          </div>

        </div>
        <div className='h-0.5 w-full bg-tools-sepparator-mobile self-center'></div>

          {/* <h2 className='text-2xl font-bold tracking-wider self-start ml-1 navText'>Tools</h2> */}

        <div className='flex flex-col gap-4'>

          <div className='pl-8'>
            <Link href={"/forms/Analyze"} className={`
            ${pathname.endsWith('/Analyze') ? ("border-r-12px border-r-navBarFocus text-white") : ("border-none")}
            flex flex-row items-center gap-2 py-0.5 hover:border-solid hover:border-r-12px hover:border-r-blue-700
            `}>
              <div className='py-0.5'>
                <Analyze_icon/>
              </div>
              <p className='text-base'>Analyze file</p>
            </Link>
          </div>

          <div className='pl-8'>
            <Link href={"/forms/Rephrase"} className={`
            ${pathname.endsWith('/Rephrase') ? ("border-r-12px border-r-navBarFocus text-white") : ("border-none")}
            flex flex-row items-center gap-2 py-0.5 hover:border-solid hover:border-r-12px hover:border-r-blue-700
            `}>
              <div className='py-0.5'>
                <Rephrase_icon/>
              </div>
              <p className='text-base'>Rephrase file</p>
            </Link>
          </div>

          <div className='pl-8'>
            <Link href={"/forms/Compare"} className={`
            ${pathname.endsWith('/Compare') ? ("border-r-12px border-r-navBarFocus text-white") : ("border-none")}
            flex flex-row items-center gap-2 py-0.5 hover:border-solid hover:border-r-12px hover:border-r-blue-700
            `}>
              <div className='py-0.5'>
                <Compare_icon/>
              </div>
              <p className='text-base'>Compare file</p>
            </Link>
          </div>

          <div className='pl-8'>
            <Link href={"/forms/Summarize"} className={`
            ${pathname.endsWith('/Summarize') ? ("border-r-12px border-r-navBarFocus text-white") : ("border-none")}
            flex flex-row items-center gap-2 py-0.5 hover:border-solid hover:border-r-12px hover:border-r-blue-700
            `}>
              <div className='py-0.5'>
                <Summarize_icon/>
              </div>
              <p className='text-base'>Summarize file</p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SideMenuMobile;
