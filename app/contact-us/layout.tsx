import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome :: GCC Ltd - Contact Us",
  description: "GCC Global Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
