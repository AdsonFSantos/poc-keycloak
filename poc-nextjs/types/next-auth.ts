import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken: string
    user: User
  }
  interface User {
    token: string
    roles: string[]
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string | unknown
  }
}