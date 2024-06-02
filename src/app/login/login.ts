"use client";
import { registedUser } from "../_lib/firebase_func";
import { userCheck } from "../_lib/firebase_func";
import { loginKey } from "../_interfaces/interfaces";
import { saveLoginData } from "../_lib/cookie";

export async function loginAction(formData: FormData)
{
    const email = formData.get("email");
    const password = formData.get("password");
    const remember = formData.get("remember");

    if (remember !== null)
    {
        console.log("remember")
    }
    if (email == null || password == null)
    {
        return;
    }

    const input: userCheck = { email: email.toString(), password: password.toString() }
    const res = await registedUser(input);
    if (res?.result) {
        const path = localStorage.getItem("path")
        localStorage.removeItem("path")
        if (path == null) { console.log("path-error"); }
        else {
            const login_key: loginKey = { name: res.name, userId: email.toString() }
            saveLoginData(login_key);
            window.location.href = path;
    }
    }

    console.log(email,password)
}