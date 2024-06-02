"use server"

import { cookies } from "next/headers"
import { loginKey } from "../_interfaces/interfaces";

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

export const saveLoginData = ({ name, userId }: loginKey) =>
{
    cookies().set('name', name);
    cookies().set('userId', userId);
}