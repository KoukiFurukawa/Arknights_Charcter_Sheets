"use client"
import React from 'react';
import Link from 'next/link';
import SimpleInput from '../ui/SimpleInput';
import { IModal } from '@/app/_interfaces/interfaces';

import { loginAction } from '@/app/login/login';
import { signupAction } from '@/app/signup/signup';

const ModalBody: React.FC<IModal> = ({ title, bodyData, isLogin }) =>
{
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (isLogin) { await loginAction(formData) }
        else { await signupAction(formData) }
    }
    return (
        <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>

                {bodyData.map((value, key) => {
                    return (
                        <SimpleInput id={value.id} _type={value._type} placeholder={value.placeholder} label={value.label} require={value.require} key={key} />
                    )
                })}

                <div className="flex justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" name='remember' type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ログイン状態を保つ</label>
                    </div>
                    {/* <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a> */}
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {title}
                </button>
                
                
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        {isLogin ? "ユーザー登録は" : "ログインは"}<Link href={isLogin ? "/signup" : "/login"} className="text-blue-700 hover:underline dark:text-blue-500">こちら</Link>
                    </div>
            </form>
        </div>
    )
}

export default ModalBody