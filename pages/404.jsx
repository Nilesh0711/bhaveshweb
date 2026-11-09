import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Page Not Found - Bhavesh Gupta | PMRF Fellow | IIT Madras</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />
      <main className="grow flex items-center justify-center py-20 px-4 text-center gradient-bg-services">
        <div className="max-w-md">
          <p className="text-blue-600 font-extrabold text-6xl">404</p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Sorry, we couldn’t find the page you’re looking for. It might have been moved or doesn’t exist.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/home"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Go to Home
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
