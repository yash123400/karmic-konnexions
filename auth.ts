import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const adminUsers = [
  {
    id: '1',
    email: process.env.ADMIN_USER_1_EMAIL ?? '',
    name: process.env.ADMIN_USER_1_NAME ?? 'Admin 1',
    passwordHash: process.env.ADMIN_USER_1_PASSWORD_HASH ?? '',
  },
  {
    id: '2',
    email: process.env.ADMIN_USER_2_EMAIL ?? '',
    name: process.env.ADMIN_USER_2_NAME ?? 'Admin 2',
    passwordHash: process.env.ADMIN_USER_2_PASSWORD_HASH ?? '',
  },
  {
    id: '3',
    email: process.env.ADMIN_USER_3_EMAIL ?? '',
    name: process.env.ADMIN_USER_3_NAME ?? 'Admin 3',
    passwordHash: process.env.ADMIN_USER_3_PASSWORD_HASH ?? '',
  },
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = adminUsers.find(
          u =>
            u.email.toLowerCase() ===
            (credentials.email as string).toLowerCase()
        )
        if (!user || !user.passwordHash) return null

        const match = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        )
        if (!match) return null

        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 8 * 60 * 60 },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
})
