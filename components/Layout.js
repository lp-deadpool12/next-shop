import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - next-shop" : "next-shop"}</title>
        <meta name="description" content="Online Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md px-4">
            <Link href="/" className="text-lg font-bold">
              LP SHOP
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          Copyrigth © {new Date().getFullYear()} LP Shop
        </footer>
      </div>
    </>
  );
}
