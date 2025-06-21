import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import '../styles/globals.css';
import Header from '../components/Header';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Samar Rihan - Web Developer & Designer',
  description: 'Professional portfolio of Samar Rihan - Creative Developer & Designer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="py-6 md:px-8 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">LinkedIn</a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}