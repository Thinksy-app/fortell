"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-zco3hz4hryebuzc0.us.auth0.com";
const clientId = "CGrUxGB0siKajxkGaBaUKVIcJRyCPjHj";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}          
        >        
          <ThemeProvider theme={baselightTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Auth0Provider>
      </body>
    </html>
  );
}
