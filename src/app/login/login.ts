"use client";
import { registedUser } from "../_lib/firebase_func";
// import { useRouter } from "next/navigation";
import { userCheck } from "../_lib/firebase_func";

export async function loginAction(formData: FormData)
{
    const email = formData.get("email");
    const password = formData.get("password");
    const remember = formData.get("remember");

    // const router = useRouter();

    if (remember !== null)
    {
        console.log("remember")
    }
    if (email == null || password == null)
    {
        return;
    }

    const input: userCheck = { email: email.toString(), password: password.toString() }
    const registed = await registedUser(input);
    if (registed) {
        const path = localStorage.getItem("path")
        localStorage.removeItem("path")
        if (path == null) { return; }
        window.location.href = path;
    }

    console.log(email,password)
}