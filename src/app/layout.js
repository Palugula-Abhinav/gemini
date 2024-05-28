import "@/styles/globals.css";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "Gemini",
  description: "Your AI Asssistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bgPrimary flex max-w-screen">
        <Sidebar className="" />
        {children}
      </body>
    </html>
  );
}
