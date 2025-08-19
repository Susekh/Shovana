import "./globals.css";


export const metadata = {
  title: "Shovana",
  description: "Bring Change Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
