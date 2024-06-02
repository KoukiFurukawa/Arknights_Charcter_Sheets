"use client"
import React, { useEffect, useState } from 'react';
import { CheckLogin, Logout } from '../_lib/cookie';
import { useRouter } from 'next/navigation';

function page() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const router = useRouter();

    useEffect(() => 
    {
        const getUserData = async () =>
        {
            const result = await CheckLogin();
            if (!result) { router.push("/login"); }
            else
            {
                setName(result.name)
                setEmail(result.email)
            }
        }
        getUserData()
    },[])

    return (
        <div>
            ログアウト
            <div className='border bg-neutral-100'>
                <p>{name}</p>
                <p>{email}</p>
            </div>
            このアカウントからログアウトしますか？<br />
            <button onClick={
                () => {
                    Logout();
                    window.location.reload();
                    router.push("/")
                }}>ログアウト</button>
        </div>
    )
}

export default page
