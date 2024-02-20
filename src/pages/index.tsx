import Image from "next/image";
import Layout from "@/components/Layout";
import '@/styles/globals.css'
import App from "@/components/Cart";

export default function Home() {
  return (
    <Layout>
      <div className="h-full">
      <h1 className="text-accent text-6xl text-center font-thin mt-20">Shopping Cart App</h1>
      </div>
      <App></App>
    </Layout>
  );
}
