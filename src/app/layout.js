import localFont from "next/font/local";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import "./globals.css"; // تأكد من أن هذا المسار صحيح

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> {/* إضافة Header */}
        <main>{children}</main> {/* سيتم عرض محتوى الصفحة هنا */}
        <Footer /> {/* إضافة Footer */}
      </body>
    </html>
  );
}
