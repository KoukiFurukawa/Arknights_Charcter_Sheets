"use client";
import { existingAddress } from "../_lib/firebase_func";
import { registUser } from "../_lib/firebase_func";
import { useRouter } from "next/navigation";

export async function signupAction(formData: FormData)
{
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const check_password = formData.get("check_password");
    const remember = formData.get("remember");

    const router = useRouter();

    if (remember !== null)
    {
        console.log("remember")
    }
    // 入力が不完全
    if (email == null || password == null || check_password == null || name == null)
    {
        return;
    }
    // 確認用パスワードが違う
    if (password != check_password)
    {
        return;
    }
    console.log(name, email, password, check_password);

    const existing = await existingAddress({ email: email.toString(), password: password.toString() })
    if (existing) { return; }
    registUser({
        email: email.toString(),
        password: password.toString(),
        name: name.toString(),
        image: "",
        sheetIds: []
    })

    const path = localStorage.getItem("path")
    localStorage.removeItem("path")
    if (path == null) { return; }
    
    router.push(path);
    

}