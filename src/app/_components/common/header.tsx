"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CheckLogin } from '../modal/cookie';

// components
import UserMenu from '../ui/UserMenu';
import Sidebar from './Sidebar';

// interfaces
import { IASidebar } from '@/app/_interfaces/interfaces';

function Header() {

    const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const router = useRouter();

    const toggleUserMenu = async () => {
        if (showUserMenu) { setShowUserMenu(false); return; }
        else {
            const result = await CheckLogin();
            if (!result) { router.push("/login"); }
            else { setShowUserMenu(true) }
            return ;
        }
    }

    const toggleSidebar = () => {
        if (showSidebar) { setShowSidebar(false) }
        else { setShowSidebar(true) }
        return;
    }

    return (
    <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                    <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>

                    <a href="#" className="flex ms-2 md:me-24">
                    <Image src="/next.svg" className="h-8 me-3" width={32} height={32} alt='Arknights' />
                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">求人票保管所</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center ms-3">
                        <div>
                        <button onClick={toggleUserMenu} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"></img>
                        </button>
                        </div>
                        {
                            showUserMenu ?
                            <>
                                <div className='fixed top-0 left-0 w-screen h-screen z-0' onClick={toggleUserMenu}></div>
                                <UserMenu />
                            </>
                            : <></>
                        }
                    </div>
                    </div>
                </div>
            </div>
            </nav>
        
            {
                showSidebar ?
                <>
                    <div className='fixed top-0 left-0 w-screen h-screen z-0 bg-gray-300/50' onClick={toggleSidebar}></div>
                    <Sidebar isSmall={true} />
                </> : <></>
            }
    </div>
    )
}

export default Header;
