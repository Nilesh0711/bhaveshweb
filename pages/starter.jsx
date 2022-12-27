import React from "react";
import Link from "next/link";
import Head from "next/head";

const Starter = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main-content" className="relative grow">
        <article className="flex md:flex-row flex-col items-center justify-center text-center">
          <header className="flex flex-col items-center justify-center my-20">
            <img
              className="mb-2 rounded-md w-80 h-80"
              alt="Author"
              src="/img/profile.jpg"
            />
            <h1 className="text-4xl my-4 font-extrabold">Bhavesh Gupta</h1>
            <h2 className="text-xl text-neutral-500 dark:text-neutral-400">
              Contact Details
            </h2>
            <div className="my-2 flex flex-row space-x-2">
              <Link href="ph22d033@smail.iitm.ac.in">
                <svg
                  width="24px"
                  className="text-gray-800 hover:text-blue-800"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
              </Link>
              <Link href="gupta.bhavesh1605@gmail.com">
                <svg
                  width="24px"
                  height="24px"
                  className="text-gray-800 hover:text-blue-800"
                  viewBox="-2 -2 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  preserveAspectRatio="xMinYMin"
                >
                  <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@bhaveshgupta2760">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="text-gray-800 hover:text-blue-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
              <Link href="https://linkedin.com/in/bhavesh-guptaa">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="text-gray-800 hover:text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="ic-social-facebook">
                    <rect
                      className="cls-1"
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="6"
                    />
                    <path className="cls-1" d="M12,20.89v-10a4,4,0,0,1,4-4h0" />
                    <line className="cls-1" x1="9.03" y1="13" x2="15.03" y2="13" />
                  </g>
                </svg>
              </Link>
              <Link href="https://github.com/bhaveshgupta1605">
                <svg
                  width="23px"
                  height="23px"
                  className="text-gray-800 hover:text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                </svg>
              </Link>
            </div>
          </header>
          <section className="md:ml-32 dark:prose-invert flex flex-col items-center justify-center md:mb-20 mx-5">
            <h2
              id="prime-ministers-research-fellow"
              className="relative group font-bold text-2xl"
            >
              Prime Minister's Research Fellow
            </h2>
            <h3
              id="soft--active-matter-labhttpswwwiitkacinsam"
              className="relative group mt-6 text-blue-500 text-xl font-semibold"
            >
              <a href="https://quantum.iitm.ac.in">CQuICC - Center for Quantum Information, Communication and Computing Lab</a>
            </h3>
            <h3
              id="department-of-physicshttpsiitkacinphy-iit-kanpurhttpsiitkacin"
              className="relative group mt-4 font-semibold text-xl text-blue-500"
            >
              <a href="https://physics.iitm.ac.in">Department of Physics</a>,
              <a href="https://www.iitm.ac.in/"> IIT Madras</a>
            </h3>
            <p className="mt-4">Welcome to my homepage.</p>
            <p className="mt-6">
            I am Bhavesh Gupta, a research scholar in the Physics Department at IIT Madras. See my about page for more information. Visit my contact page to get in touch.
              <br /> To know more, visit my{" "}
              <Link className="text-blue-500" href="./about">
                about{" "}
              </Link>
              page. To contact me, visit the{" "}
              <Link className="text-blue-500" href="../contact">
                contact{" "}
              </Link>
              page.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Starter;
