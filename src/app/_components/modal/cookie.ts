"use server"

import { cookies } from "next/headers"

interface loginKey
{
    name: string,
    userId: string,

}

export const CheckLogin = () => 
{
    const cookieStore = cookies();
    let data: loginKey = {
        name : "",
        userId : ""
    }
    const cookie = cookieStore.getAll();
    
    cookie.map((cookie) => 
    {
        if (cookie.name === "name")
        {
            data.name = cookie.value;
        }
        else if (cookie.name == "userId")
        {
            data.userId = cookie.value;
        }
    });

    if (data.name != "" && data.userId != "")
    {
        return data;
    }
    else
    {
        return false;
    }
}