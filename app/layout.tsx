import { MainAppContext } from '@/appContext/MainAppContext';
import './globals.css'
import { ReduxProvider } from '@/Redux/provider';


export const metadata = {
  title: 'Tacky Toe',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MainAppContext>{children}</MainAppContext>
        </ReduxProvider>
      </body>
    </html>
  );
}
