export const metadata = {
  title: "Weather App",
  description: "Simon Xu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bodyLayout">
        {children}
      </body>
    </html>
  );
}
