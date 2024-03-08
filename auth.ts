import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from "@auth/core/providers/credentials";

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({})],
});