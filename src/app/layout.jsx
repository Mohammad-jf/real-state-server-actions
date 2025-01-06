import { Layout } from "@/layout/Layout";
import "./globals.css";
import yekan from "@/utils/fonts";

export const metadata = {
  title: " املاک ایرانمهر",
  description: "پلتفرم تخصصی خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Layout>
        <body className={yekan.className}>{children}</body>
      </Layout>
    </html>
  );
}
