
'use server'
import {signIn } from '@/auth';

  export async function enter() {
    try {
      await signIn();
    } catch (error) {
      if (error) {
            return 'Something went wrong.';
        }
      }
    }