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
        return { name: data.name, email: data.userId };
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

export const Logout = () =>
{
    cookies().set("name", "");
    cookies().set("userId", "");
}