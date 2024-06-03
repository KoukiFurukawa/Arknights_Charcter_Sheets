"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

function Mypage() {

    const router = useRouter()

    const transitionEdit = () =>
    {
        router.push("/edit");
    }

    return (
        <div>
            mypage
            <button 
                className="group fixed bottom-16 right-12 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32"
                onClick={transitionEdit}
            >
                <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                    新規作成
                </div>
                <div className="absolute right-3.5">
                    <svg className="w-7 h-7 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default Mypage;
