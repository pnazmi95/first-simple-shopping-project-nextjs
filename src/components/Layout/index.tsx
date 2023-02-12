import {FunctionComponent} from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Head from "next/head";
import * as console from "console";

interface ILayoutProps extends React.PropsWithChildren {
    title?: string
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children, title}): JSX.Element => {
    return (
        <>
            <Head>
                <title>
                    {`${title} - shopping`}
                </title>
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <Header/>
                <main className="container m-auto mt-4 px-4">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;