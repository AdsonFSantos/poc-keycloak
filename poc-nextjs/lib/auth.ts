import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // console.log("jwt - user", user);
      // console.log("jwt - token", token);
      // console.log("jwt - account", account);
      if (account) {
        token.idToken = account.id_token
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at

      }
      return token;
    },
    session({ session, token }) {
      // console.log("session", session);
      // console.log("session", token);
      session.user.roles = decodeJWT(token.accessToken as string).realm_access.roles;
      session.accessToken = token.accessToken as string;
      // session.user.token = token.accessToken as string;

      return session;
    }
  },
  debug: process.env.NODE_ENV === "development",
}

const decodeJWT = (token: string) => JSON.parse(atob(token.split(".")[1])) as decodeToken;
interface decodeToken {
  realm_access: { roles: string[] };
}