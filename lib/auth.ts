import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import type { NextAuthOptions } from 'next-auth'

const adminUsers = [
  {
    id: '1',
    email: process.env.ADMIN_USER_1_EMAIL!,
    name: process.env.ADMIN_USER_1_NAME!,
    passwordHash: process.env.ADMIN_USER_1_PASSWORD_HASH!,
  },
  {
    id: '2',
    email: process.env.ADMIN_USER_2_EMAIL!,
    name: process.env.ADMIN_USER_2_NAME!,
    passwordHash: process.env.ADMIN_USER_2_PASSWORD_HASH!,
  },
  {
    id: '3',
    email: process.env.ADMIN_USER_3_EMAIL!,
    name: process.env.ADMIN_USER_3_NAME!,
    passwordHash: process.env.ADMIN_USER_3_PASSWORD_HASH!,
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Staff Login',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = adminUsers.find(
          u => u.email.toLowerCase() === credentials.email.toLowerCase()
        )
        if (!user) return null

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        )
        if (!passwordMatch) return null

        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 8 * 60 * 60 },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id
      return session
    },
  },
}
