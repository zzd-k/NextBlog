
import "./globals.css";
import React from 'react';
import Link from "next/link";



export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <div className="flex justify-center text-blue-500 p-6 gap-6">

            <Link href="/">Home</Link>
            <Link href="/visitors">visitors</Link>
          </div>
          <div className="flex gap-6">
            {team}
            {analytics}
          </div>
          {children}

        </div>
      </body>
    </html>
  );
}
