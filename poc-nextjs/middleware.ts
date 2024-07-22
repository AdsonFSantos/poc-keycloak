import { withAuth } from "next-auth/middleware";
// import { decodeJWT } from "./lib/session";
import { Exo } from "next/font/google";
import { NextResponse } from "next/server";

const decodeJWT = (token: string) => JSON.parse(atob(token.split(".")[1])) as decodeToken;
interface decodeToken {
  realm_access: { roles: string[] };
}

export default withAuth(
  async function middleware(req, res) {
    console.log("Middleware");
    const token = decodeJWT(req.nextauth.token?.accessToken as string);

    for (let index = 1; index <= 3; index++)
      if (req.nextUrl.pathname === `/policy${index}` && !token.realm_access.roles.includes(`role${index}`))
        return NextResponse.redirect(new URL("unauthorized", req.url));

  },
  {
    callbacks: {
      authorized({ token }) {
        console.log("authorized", token);
        return !!token;
      }
    }
  }
)

export const config = { matcher: ["/policy1", "/policy2", "/policy3"] }