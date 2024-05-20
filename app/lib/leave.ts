
'use server'
import { signOut } from "next-auth/react";

  export async function leave() {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      if (error) {
            console.log("Error here!")
        }
      }
    }