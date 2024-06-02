"use client";
import { existingAddress } from "../_lib/firebase_func";
import { registUser } from "../_lib/firebase_func";
import { saveLoginData } from "../_lib/cookie";
import { loginKey } from "../_interfaces/interfaces";

export async function signupAction(formData: FormData)
{
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const check_password = formData.get("check_password");
    const remember = formData.get("remember");

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
    if (path == null) { console.log("path-error"); }
    else {
        const login_key: loginKey = { name: name.toString(), userId: email.toString() }
        saveLoginData(login_key);
        window.location.href = path;
    }
    

}