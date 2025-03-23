import './globals.css';

export const metadata = {
  title: "Fahry.de",
  description: "Fahrschul-Buchungstool",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
