"use server";
import { db } from "../_lib/firebase_client";

export async function loginAction(formData: FormData)
{
    const email = formData.get("email");
    const password = formData.get("password");
    const remember = formData.get("remember");

    if (remember !== null)
    {
        console.log("remember")
    }

    console.log(email,password)
}