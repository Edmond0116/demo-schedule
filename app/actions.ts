
'use server'
import { signOut} from '@/auth';
// import { useRouter } from 'next/navigation';
export async function leave() {
  
  try {
    await signOut();
    
  } catch (error) {
    if (error) {
          return 'Something went wrong.';
      }
    }
  };

 