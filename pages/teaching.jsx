import React from "react";
import * as fs from "node:fs/promises";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Teaching = (props) => {
  const data = props.myData;
  const teach = props.myTeach;
  return (
    <div>
      <Head>
        <title>Teachings</title>
        <meta name="description" content="Teachings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar teaching={"font-bold text-blue-500"} extra={""} />
      <main className="gradient-bg-services">
        <div className="flex flex-col px-6 md:w-4/5 pt-12 m-auto">
          <div className="font-extrabold text-xl md:text-4xl text-black">
            My Teaching Activities
          </div>
          <div className="info md:mt-20 my-10 md:w-1/2 text-black">
            <div className="font-bold text-lg md:text-2xl">
              PMRF TA work for NPTEL
            </div>
            <section>
              <div className="my-4 text-md font-semibold text-violet-900">
                2022-2023
              </div>
              <p className="my-2 font-sans text-lg text-gray-600">
                I have applied for PMRF teaching assistant work for NPTEL Course
                January 2023. The five given priority courses are of mathematics
                background for undergrad students. I am willing to hold live
                sessions to assist the students. I think these lectures will be
                very beneficial to the students.
              </p>
            </section>
            <section>
              <div className="mt-16 text-lg md:text-2xl font-bold">
                Institute Teaching Assistantship
              </div>

              {data.map((e, index) => {
                return (
                  <section key={index} className="text-base">
                    <h4
                      id="2020-2021"
                      className="relative group mt-6 font-semibold text-violet-900"
                    >
                      {e.year}{" "}
                    </h4>
                    {e.teaching.map((element, index) => {
                      return (
                        <ul key={index} className="list-disc list-inside space-y-4 md:p-3 mt-6 text-sm md:text-lg text-gray-600">
                          <li>{element.title}</li>
                        </ul>
                      );
                    })}
                  </section>
                );
              })}
            </section>
          </div>
        </div>
      </main>

      <div className="gradient-bg-transactions">
        <YoutubeAndDrive />
      </div>

      <div className="gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const YoutubeAndDrive = () => {
  return (
    <>
      <div className="flex flex-col px-6 md:w-4/5 pb-24 m-auto">
        <section className="md:w-1/2">
          <div className="py-8 italic text-base md:text-xl text-red-600 font-medium">
            Link to playlist is given below ↡{" "}
          </div>
          <div className="p-5 items-center bg-red-100 rounded-md flex flex-row space-x-3">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              className="text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ff0000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
            <div className="text-sm md:text-base text-red-600 flex-1">
              Find the full lecture playlist on{" "}
            </div>
            <Link
              target="_blank"
              href="https://www.youtube.com/@bhaveshgupta2760"
              className="hover:bg-red-600 text-red-600 hover:text-black p-2 text-sm md:text-base italic rounded-md"
            >
              Youtube
            </Link>
          </div>
        </section>

        <section className="md:w-1/2">
          <div className="my-8 italic text-base md:text-xl font-medium text-blue-600">
            Link to lecture notes is given below ↡{" "}
          </div>
          <div className="p-5 bg-blue-100 rounded-md flex flex-row space-x-3 items-center">
            <svg
              width="24px"
              height="24px"
              className="text-blue-600"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#5b66e7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              preserveAspectRatio="xMinYMin"
            >
              <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
            </svg>
            <div className="text-sm md:text-base text-blue-600 flex-1">
              Find the full lecture playlist on
            </div>
            <Link
              target="_blank"
              href="https://drive.google.com/drive/folders/1bHr3FJghIKz6wcJKboC5HFZBlqr_5e_g?usp=share_link"
              className="hover:bg-blue-600 text-blue-600 hover:text-black p-2 italic text-sm md:text-base rounded-md"
            >
              Drive
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

const IndividualNotes = () => {
  return (
    <>
      <section>
        <div className="my-8 italic text-base md:text-xl font-medium text-gray-500">
          Video links and notes for individual lessons are given below ↡
        </div>
        <div className="p-3 my-6">
          <ul className="list-decimal list-inside space-y-4 mx-3">
            {teach.map((e, index) => {
              return (
                <li>
                  <em>
                    Lecture- <span className="italic">{index + 1}</span>{" "}
                  </em>
                  <a
                    href={e.youtube}
                    className="ml-3 text-red-600"
                    target="_blank"
                  >
                    {" "}
                    Youtube{" "}
                    <span className="relative inline-block align-text-top">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        className="text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#ff0000"
                        strokeWidth="1"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </span>
                  </a>
                  <span className="ml-3">-</span>
                  <a
                    href={e.notes}
                    className="ml-3 text-blue-600"
                    target="_blank"
                  >
                    {" "}
                    Notes{" "}
                    <span className="relative inline-block align-text-top">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        className="text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      >
                        <path d="M19,14.5 L19,5.5 C19,4.67157288 18.3284271,4 17.5,4 L6.5,4 C5.67157288,4 5,4.67157288 5,5.5 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L13.5,20 C14.3284271,20 15,19.3284271 15,18.5 C15,17.1192881 16.1192881,16 17.5,16 C18.3284271,16 19,15.3284271 19,14.5 L19,14.5 Z M18.5014408,16.7913481 C18.1948298,16.9255432 17.8561101,17 17.5,17 C16.6715729,17 16,17.6715729 16,18.5 C16,18.8561101 15.9255432,19.1948298 15.7913481,19.5014408 C16.9873685,18.9526013 17.9526013,17.9873685 18.5014408,16.7913481 L18.5014408,16.7913481 Z M4,5.5 C4,4.11928813 5.11928813,3 6.5,3 L17.5,3 C18.8807119,3 20,4.11928813 20,5.5 L20,14.5 C20,18.0898509 17.0898509,21 13.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 L4,5.5 Z M8.5,9 C8.22385763,9 8,8.77614237 8,8.5 C8,8.22385763 8.22385763,8 8.5,8 L15.5,8 C15.7761424,8 16,8.22385763 16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L8.5,9 Z M8.5,12 C8.22385763,12 8,11.7761424 8,11.5 C8,11.2238576 8.22385763,11 8.5,11 L15.5,11 C15.7761424,11 16,11.2238576 16,11.5 C16,11.7761424 15.7761424,12 15.5,12 L8.5,12 Z M8.5,15 C8.22385763,15 8,14.7761424 8,14.5 C8,14.2238576 8.22385763,14 8.5,14 L13.5,14 C13.7761424,14 14,14.2238576 14,14.5 C14,14.7761424 13.7761424,15 13.5,15 L8.5,15 Z" />
                      </svg>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="italic mt-6">
            <em>
              <strong>5 more</strong> lectures to be uploaded soon.
            </em>
          </p>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  let myData = await fs.readFile("teachingdata/institueteaching.json", "utf-8");
  let myTeach = await fs.readFile("teachingdata/teachings.json", "utf-8");
  myData = JSON.parse(myData);
  myTeach = JSON.parse(myTeach);
  return {
    props: { myData, myTeach },
  };
}

export default Teaching;
