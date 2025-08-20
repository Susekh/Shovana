import "./globals.css";


export const metadata = {
  title: "Shovana Charity Foundation",
  description: "Bring Change Home",
  icons: {
    icon: "/favicon-cropped.png", 
  },
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
