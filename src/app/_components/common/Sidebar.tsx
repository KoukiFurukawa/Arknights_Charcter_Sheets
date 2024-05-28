"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckLogin } from '../modal/cookie';
import { sidebarData } from '@/app/_utils/sidebar_data';
import { IASidebar } from '@/app/_interfaces/interfaces';

export default function Sidebar({ isSmall = false }: IASidebar) {

    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => 
    {
        const transition = async () => {
            const result = await CheckLogin();
            if (!result){ setIsLogin(false); }
            else { setIsLogin(true) }
        }
        transition();
    },[]);

    return (
    <>
        <aside className={`fixed top-0 left-0 z-10 w-64 h-screen pt-20 transition-transform ${isSmall ? '' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {sidebarData.map((value, key) => {
                        if (value.needLogin && !isLogin) { value.path = "/login" }
                        return (
                            <li key={key}>
                                <Link href={value.path} className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d={value.icon} ></path>
                                </svg>
                                <span className='ms-3'>{value.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                
                </ul>
            </div>
        </aside>
    </>
    )
}
