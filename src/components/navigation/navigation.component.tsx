'use client'
import React, { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { RiArrowDownSLine } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
import { Small_svg } from '../logo/small_svg';
import SideMenuMobile from '../menu/SideMenuMobile';
import { DoubleArrow_icon } from '../logo/doubleArrow_icon';
import { usePathname } from 'next/navigation';

type Props = {
  username: string;
}

export function Navigation({username}: Props) {

  const [ open, setOpen ] = useState<boolean>(false);
  const [ openMenu, setOpenMenu ] = useState<boolean>(false);
  const { data:session } = useSession()
  const pathname = usePathname()
  
  function openNav(){
    const nav:any = document.getElementById('nav')
    const navDiv:any = document.getElementById('navDiv')
    const arrow:any = document.getElementById('arrow')

    if(nav && open){
      nav.style.cssText = `
      display: flex;
      `
    } else if (nav && !open){
      nav.style.cssText = `
      display: none;
      `
    }

    if(arrow && open){
      arrow.style.cssText = `
      transform: rotate(180deg);
      `
    } else if (arrow && !open){
      arrow.style.cssText = `
      transform: rotate(0deg);
      `
    }

    document.body.addEventListener('click', function click(event) {
      if (navDiv && !navDiv.contains(event.target)) {
        setOpen(false)
        document.body.removeEventListener('click', click);
      } 
    });
  }

  function routeChangeOpenMenu(){
    setOpenMenu(false)
    openNavMenu()
  }

  function openNavMenu(){
    const sideMenuMobile:any = document.getElementById('sideMenuMobile')
    const doubleArrow_icon:any = document.getElementById('doubleArrow_icon')
    const doubleArrow_iconDiv:any = document.getElementById('doubleArrow_iconDiv')

    if(sideMenuMobile && openMenu){
      sideMenuMobile.style.cssText = `
      display: block;
      `
    } else if (sideMenuMobile && !openMenu){
      sideMenuMobile.style.cssText = `
      display: none;
      `
    }

    if(doubleArrow_icon && openMenu){
      doubleArrow_icon.style.cssText = `
      transform: rotate(0deg);
      `
    } else if (doubleArrow_icon && !openMenu){
      doubleArrow_icon.style.cssText = `
      transform: rotate(180deg);
      `
    }
    
    document.body.addEventListener('click', function click(event) {
      if ((sideMenuMobile && !sideMenuMobile.contains(event.target)) && (doubleArrow_iconDiv && !doubleArrow_iconDiv.contains(event.target))) {
        setOpenMenu(false)
        document.body.removeEventListener('click', click);
      } 
    });
  }
  
  useEffect(() => {
    openNav()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[open])

  useEffect(() => {
    openNavMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[openMenu])

  useEffect(() => {
    routeChangeOpenMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="w-screen fixed top-0 flex justify-between text-nav-focus bg-navBar z-50 px-2 md:px-6">

    <div className='flex items-center sm:hidden'>
      <div className='w-109px flex flex-row items-center gap-4' onClick={e => setOpenMenu(!openMenu)} id='doubleArrow_iconDiv'>
        <div id='doubleArrow_icon' className='w-5 transition-all ease-in-out 200ms transform rotate-180'>
          <DoubleArrow_icon />
        </div>

        {/* {(session?.user && session?.user.provider === "google")
        ? (session?.user && data_user && data_user?.user?.emailVerified && data_user?.user?.emailVerified === true && typeof data_credits === "number") && (
            <p className='block sm:hidden'>{data_credits} c</p>
          )
        : (session?.user && data_user?.user?.instructionsVerified && data_user?.user?.instructionsVerified === true && typeof data_credits === "number") && (
            <p className='block sm:hidden'>{data_credits} c</p>
          )
        } */}
      </div>
      <div className='hidden' id='sideMenuMobile'>
        <SideMenuMobile/>
      </div>
    </div>

    <div className='flex justify-center items-center'>
      <Link href={'/'} className='flex flex-row gap-2 items-center'>
        <Small_svg />
        <p className='tracking-wide hidden md:block'>AnalyzeFileAI.com</p>
      </Link>
    </div>
    
    <div className='flex flex-row justify-center items-center gap-4 md:gap-6'>

      {/* {(session?.user && session?.user.provider === "google")
        ? (session?.user && data_user && data_user?.user?.emailVerified && data_user?.user?.emailVerified === true && typeof data_credits === "number") && (
            <p className='hidden sm:block'>{data_credits} credits left</p>
          )
        : (session?.user && data_user?.user?.instructionsVerified && data_user?.user?.instructionsVerified === true && typeof data_credits === "number") && (
            <p className='hidden sm:block'>{data_credits} credits left</p>
          )
      } */}

      <Link href={`/cart`} className='py-1 sm:py-0 px-2 my-2 rounded-md bg-buy-credits-button'>
        <p className='hidden sm:block'>Buy Credits</p>
        <FiShoppingCart size={22} className='sm:hidden'/>
      </Link>

      {/* <Link href={`/user/${session?.user?.name}/account`}>
        <img
          src={session?.user?.image!}
          alt={`${session?.user?.name} image`}
          className="rounded-full h-14 w-14 bg-slate-500 mr-2"
        />
      </Link> */}
      
      <div id='navDiv' className='flex flex-col relative h-full justify-center'>
        <button className='flex flex-row gap-1 items-center' onClick={() => setOpen(!open)}>
          <p className='hidden md:block'>{username?.substring(0, 20)}</p>
          <p className='md:hidden'>More</p> 
          <RiArrowDownSLine id='arrow' className='transition-all ease-in-out 200ms' size={18}/>
        </button>
        <div id='nav' className='flex-col w-screen h-screen md:h-auto md:w-36 absolute top-full -right-2 hidden bg-navBar border-b md:border-r md:border-l border-gray-400'>
          
          <p className='py-2 md:hidden pl-2 border-b border-gray-400 font-semibold text-center'>{session?.user?.name}</p>
          
          <div className='flex flex-col'>
            <Link href={`/user/${session?.user?.name}/account`} onClick={() => setOpen(false)} className='pl-2 py-2 border-b border-nav-focus hover:bg-nav-focus hover:text-nav-blur'>Account</Link>
            <Link href={`/user/${session?.user?.name}/pricing`} onClick={() => setOpen(false)} className='pl-2 py-2 border-b border-nav-focus hover:bg-nav-focus hover:text-nav-blur'>Pricing</Link>
            <Link href={`/user/${session?.user?.name}/faq`} onClick={() => setOpen(false)} className='pl-2 py-2 border-b border-nav-focus hover:bg-nav-focus hover:text-nav-blur'>FAQ</Link>
            <Link href={`/user/${session?.user?.name}/feedback`} onClick={() => setOpen(false)} className='pl-2 py-2 border-b border-nav-focus hover:bg-nav-focus hover:text-nav-blur'>Feedback</Link>
          </div>
          <button className='uppercase p-2 border-b md:border-b-0 border-nav-focus hover:bg-nav-focus hover:text-nav-blur' onClick={() => signOut()}>
            Log out
          </button>

          {/* <div className='px-4 pt-8 sm:hidden flex flex-row justify-between'>
            {(session?.user && session?.user.provider === "google")
              ? (session?.user && data_user?.user?.emailVerified && data_user?.user?.emailVerified === true && typeof data_credits === "number") && (
                  <p className='sm:hidden'>{data_credits} credits left</p>
                )
              : (session?.user && data_user?.user?.instructionsVerified && data_user?.user?.instructionsVerified === true && typeof data_credits === "number") && (
                  <p className='sm:hidden'>{data_credits} credits left</p>
                )
            }

            <Link href={`/cart`} className='px-2 rounded-md bg-buy-credits-button'>
              <p>Buy Credits</p>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  )
}

