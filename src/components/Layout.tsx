import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import App from './Cart';

interface LayoutProps {
    children: ReactNode;
}

export const siteTitle = 'Emerald Devs | Shopping Cart App';

export default function Layout({ children }: LayoutProps) {
    return (
            <div className="main-layout h-full">
                <Head>
                    <meta charSet="UTF-8" />
                    <title>{siteTitle}</title>
                </Head>
                <Header />
                <main>{children}
                </main>
                <Footer />
            </div>
    )
}