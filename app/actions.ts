
'use server'
import { signOut } from "next-auth/react";
import { redirect } from 'next/navigation';
// import { useRouter } from 'next/navigation';
export async function leave() {
  try {
    await signOut({ callbackUrl: '/' });
  } catch (error) {
    if (error) {
      console.log("Error is happening!");
      }
    }
    
  };

 