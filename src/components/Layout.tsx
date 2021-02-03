import React, { ReactNode } from "react";
import Head from "next/head";

import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="bg-pattern bg-no-repeat h-screen max-w-screen-2xl mx-auto pt-16">
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
