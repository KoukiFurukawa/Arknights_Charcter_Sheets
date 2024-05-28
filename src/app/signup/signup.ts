"use server";
import { db } from "../_lib/firebase_client";

export async function signupAction(formData: FormData)
{
    const name = formData.get("name");
    console.log("hello");
}