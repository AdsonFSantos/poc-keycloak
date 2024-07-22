import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AuthProvider from "@/providers/auth-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Profile from "@/components/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "m-2 flex flex-col gap-2")}>
        <div className="flex justify-between">
          <Link href="/"><Button>Home</Button></Link>
          <Link href="/policy1"><Button>Policy 1</Button></Link>
          <Link href="/policy2"><Button>Policy 2</Button></Link>
          <Link href="/policy3"><Button>Policy 3</Button></Link>
          <Link href="/api/auth/signin"><Button>Sign In</Button></Link>
          <Link href="/api/auth/signout"><Button>Sign Out</Button></Link>
        </div>
        <div className="bg-blue-100 p-2 text-center font-mono font-bold">
          <Profile />
        </div>
        <div className="bg-gray-100 rounded-md border-blue-700 border-[4px] p-4 font-semibold
                        [&>div]:flex [&>div]:flex-col [&>div]:items-center">
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}