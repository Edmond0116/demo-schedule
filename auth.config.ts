import type { NextAuthConfig } from 'next-auth';
import Google from "next-auth/providers/google"

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLanding = nextUrl.pathname.startsWith('/landingpage');
      if (isOnLanding) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/landingpage', nextUrl));
      }
      if (nextUrl.pathname.startsWith("/signout")) return Response.redirect(new URL('/', nextUrl));
      return true;
    },
  },
  providers: [Google], // Add providers with an empty array for now
} satisfies NextAuthConfig;