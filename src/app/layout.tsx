"use client";

import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { baselightTheme } from "@/utils/theme/DefaultColors";

// const domain = "dev-zco3hz4hryebuzc0.us.auth0.com";
// const clientId = "CGrUxGB0siKajxkGaBaUKVIcJRyCPjHj";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>        
          <ThemeProvider theme={baselightTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
