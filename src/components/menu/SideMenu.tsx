"use client"
import * as React from 'react';
import { BsGrid, BsGridFill } from 'react-icons/bs';
import { Rephrase_icon } from '../logo/rephrase_icon';
import { Analyze_icon }  from '../logo/analyze_icon';
import { Summarize_icon } from '../logo/summarize_icon';
import { Compare_icon } from '../logo/compare_icon';
import { Chat_icon } from '../logo/chat_icon';
import Home_icon from '../logo/home_icon';
import { DoubleArrow_icon } from '../logo/doubleArrow_icon';
import { ImParagraphLeft } from 'react-icons/im';
import { MdOutlineContentCopy } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ISideMenuProps {
}

const SideMenu: React.FunctionComponent<ISideMenuProps> = (props) => {

  const [ open, setOpen ] = useState<boolean>(false);
  const pathname = usePathname()

  function openNav(){
    const navText:any = document.getElementsByClassName('navText')
    const navOpenDiv:any = document.getElementById('navOpenDiv')
    const openArrow:any = document.getElementById('openArrow')
    const sideMenuDiv:any = document.getElementById('sideMenuDiv')
    
    for(const item of navText){
      if(open){
        setTimeout(() =>{
          item.style.cssText = `
          display: block;
          `
        }, 200)
      }else if (!open){
        item.style.cssText = `
        display: none;
        `
      }
    }

    if(open){
      navOpenDiv.style.cssText = `
      width: 240px;
      `
    }else if (!open){
      navOpenDiv.style.cssText = `
      width: 90px;
      `
    }

    if(open){
      openArrow.style.cssText = `
      transform: rotate(0deg);
      `
    }else if (!open){
      openArrow.style.cssText = `
      transform: rotate(180deg);
      `
    }

    document.body.addEventListener('click', function (event) {
      if (!sideMenuDiv.contains(event.target)) {
        setOpen(false)
      } 
    });
  }

  useEffect(() => {
    openNav()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[open])

  return (
    <div className='h-full bg-navBar text-nav-blur fixed z-40 flex-col items-center' id='sideMenuDiv'>

      <div className='w-60 flex flex-col gap-16 transition-all ease-in-out 300ms' id='navOpenDiv'>
        <div className='flex flex-col justify-start gap-6'>
          <button className='mt-6 flex justify-end cursor-pointer px-2' onClick={() => setOpen(!open)}>
            <div id='openArrow' className='transition-all ease-in-out 2000ms'>
              <DoubleArrow_icon/>
            </div>
          </button>
          
          <div className='pl-8'>
            <Link href={"/home"} className={`
            ${pathname.endsWith('/home') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
            flex flex-row items-center gap-4 ml-0.5 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
            `} onClick={e => setOpen(false)}>
              <div className='py-0.5'>
                <Home_icon/>
              </div>
              <p className='text-xl navText'>Home</p>
            </Link>
          </div>

          <div className='pl-8'>
            <Link href={"/saved/Queries"} className={`
            ${pathname.endsWith('/Queries') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
            flex flex-row items-center gap-4 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
            `} onClick={e => setOpen(false)}>
              <div className='py-0.5'>
                <BsGrid size={28} />
              </div>
              <p className='text-xl navText'>Saved Queries</p>
            </Link>
          </div>

          <div className='pl-8'>
            <Link href={"/saved/Results"} className={`
            ${pathname.endsWith('/Results') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
            flex flex-row items-center gap-4 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
            `} onClick={e => setOpen(false)}>
              <div className='py-0.5'>
                <BsGridFill size={28}/>
              </div>
              <p className='text-xl navText'>Saved Results</p>
            </Link>
          </div>

        </div>
        <div className='h-0.5 w-full bg-tools-sepparator self-center'></div>

        <div className='flex flex-col gap-4'>
          {/* <h2 className='text-2xl font-bold tracking-wider self-start ml-1 navText'>Tools</h2> */}

          <div className='flex flex-col gap-8'>

            <div className='pl-27px'>
              <Link href={"/forms/bok"} className={`
              ${pathname.endsWith('/bok') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
              flex flex-row items-center gap-2 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
              `} onClick={e => setOpen(false)}>
                <div>
                  <Chat_icon/>
                </div>
                <p className='text-xl navText'>Chat with file</p>
              </Link>
            </div>
            
            <div className='pl-8'>
              <Link href={"/forms/Analyze"} className={`
              ${pathname.endsWith('/Analyze') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
              flex flex-row items-center gap-4 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
              `} onClick={e => setOpen(false)}>
                <div className='py-0.5'>
                  <Analyze_icon/>
                </div>
                <p className='text-xl navText'>Analyze file</p>
              </Link>
            </div>

            <div className='pl-8'>
              <Link href={"/forms/Rephrase"} className={`
              ${pathname.endsWith('/Rephrase') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
              flex flex-row items-center gap-4 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
              `} onClick={e => setOpen(false)}>
                <div className='py-0.5'>
                  <Rephrase_icon/>
                </div>
                <p className='text-xl navText'>Rephrase file</p>
              </Link>
            </div>

            <div className='pl-8'>
              <Link href={"/forms/Compare"} className={`
              ${pathname.endsWith('/Compare') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
              flex flex-row items-center gap-4 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
              `} onClick={e => setOpen(false)}>
                <div className='py-0.5'>
                  <Compare_icon/>
                </div>
                <p className='text-xl navText'>Compare file</p>
              </Link>
            </div>

            <div className='pl-8'>
              <Link href={"/forms/Summarize"} className={`
              ${pathname.endsWith('/Summarize') ? ("border-r-8 border-r-navBarFocus text-nav-focus") : ("border-none")}
              flex flex-row items-center gap-4 py-0.5 hover:border-solid hover:border-r-8 hover:border-r-nav-focus
              `} onClick={e => setOpen(false)}>
                <div className='py-0.5'>
                  <Summarize_icon/>
                </div>
                <p className='text-xl navText'>Summarize file</p>
              </Link>
            </div>

          </div>
        </div>
      </div>

      

    </div>
  );
};

export default SideMenu;
