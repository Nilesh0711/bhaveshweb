import React, { useState } from "react";
import * as fs from "node:fs/promises";
import Head from "next/head";
import Navbar from "../components/navbar";
import ImageLoader from "../components/imageLoader";

import Footer from "../components/footer";

const Publications = (props) => {
  const data = props.workProgessData;
  return (
    <div>
      <Head>
        <title>Publications - Bhavesh Gupta | Prime Minister Research Fellow | Department of Physics | IIT Madras</title>
        <meta name="description" content="CQuICC | Center for Quantum Information, Communication and Computing | Department of Physics | IIT Madras | Prime Minister Research Fellow" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar publication={"font-bold text-blue-500"} extra={""} />
      <main>
        <div className="flex flex-col px-6 md:w-4/5 pt-12 m-auto">
          {/* <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, provident dolorum. Explicabo optio quidem debitis minima illum cupiditate ab, porro deserunt officia eligendi alias enim maxime tenetur delectus quam quo!
            Minima a aperiam iure harum minus laudantium sint ut eos maiores excepturi veniam neque, dolores fugiat quaerat delectus totam id quibusdam quos error quasi commodi est? Esse magnam vero asperiores.
            Cum quidem rerum deleniti quos perferendis possimus et sint voluptatem, sed quibusdam dolores, nisi, autem doloribus quo asperiores inventore culpa quis assumenda rem aperiam consequatur? Quod ullam repellendus commodi doloremque!
            Vel, saepe? Consectetur quod tempora aperiam, at voluptate voluptas repudiandae et ipsa qui velit ab nostrum, earum aliquam, unde omnis ratione eveniet placeat totam ipsam. Ipsum eos cumque esse similique.
            Obcaecati quos dolor alias, ipsam quaerat iure deleniti quod modi, eaque id molestiae exercitationem ratione ut error quae excepturi laborum facilis ad placeat. Voluptate quisquam quae et eveniet obcaecati praesentium?
            Delectus, laboriosam quas sunt mollitia error iste, nostrum architecto voluptates pariatur officiis iure tempore iusto praesentium suscipit illum fugiat, quos neque labore nulla non commodi? Obcaecati cumque fuga reiciendis labore.
            Ex, officia, impedit commodi quisquam voluptatem necessitatibus odio quaerat nisi distinctio corporis fugiat repellendus animi sit neque porro pariatur sunt debitis vitae dignissimos dolorem voluptatibus, dolor nulla. Labore, officiis reiciendis.
            Impedit consequuntur doloribus aliquid maxime enim explicabo eveniet voluptates tempore asperiores. At dolorum delectus voluptatem ipsam autem reprehenderit nostrum, molestias fugiat natus quisquam est ut odio eveniet suscipit deleniti. Numquam.
            Et ea harum alias earum dolor ab at minus repudiandae exercitationem tenetur nam atque eligendi, dignissimos voluptas accusamus reiciendis ex eius sequi excepturi, eum cupiditate! Harum nostrum accusantium similique aperiam.
            Voluptas consequatur sequi dicta ea expedita dolores incidunt, eaque tenetur? Vero, nemo vitae doloribus deserunt, perferendis accusamus, esse sit suscipit amet praesentium labore dolore delectus aspernatur ipsa. Eveniet, distinctio magnam?
            Maiores nam, nulla dolorem unde, obcaecati harum iusto aliquam praesentium neque ducimus hic optio suscipit laudantium? Accusantium molestias non ratione voluptate qui aspernatur suscipit odit fuga architecto ipsum? In, sapiente?
            Vel adipisci ratione explicabo. Autem expedita, eum reiciendis veritatis voluptates pariatur? Consectetur reiciendis, animi omnis maiores aperiam, fugiat qui unde, delectus deserunt rem voluptatum magni repudiandae dolore sunt asperiores impedit?
            Maiores labore blanditiis veniam in quo nisi soluta deserunt ipsam quisquam dignissimos accusantium fugiat assumenda officiis quidem reprehenderit laborum, consequuntur tempore quibusdam consectetur harum placeat molestias quia sequi commodi. Sunt?
            Nisi commodi dolorum ea cum quas molestias dolor aut perspiciatis possimus, exercitationem ad aliquam perferendis minima error harum eveniet obcaecati maxime dolores consequatur suscipit voluptatibus deserunt quis quod voluptatem. Accusamus.
            Amet neque sequi suscipit iusto, repellat vitae nobis atque nemo tempore unde facere, fugiat recusandae officiis nihil, minima voluptatum odio consectetur aut. Totam quia sunt ut reprehenderit? Amet, delectus pariatur?
          </div> */}
          <div className="font-extrabold text-xl md:text-4xl text-black">
            Publications
          </div>
          <div className="info md:mt-20 mt-10 md:w-1/2">
            <div className="font-bold text-lg text-black md:text-2xl">
              Publications
            </div>
            <div className="my-5 text-black">To be updated soon.</div>
          </div>
        </div>
      </main>
      <section className="">
        <div className="px-6 md:w-4/5 m-auto">
          <div className="info py-5 md:py-10">
            <div className="mt-5">
              <div className="font-bold text-lg md:text-2xl text-black">
                Work in progress
              </div>
              <ul className="list-decimal space-y-4 my-12 text-black md:mx-3">
                {data.map((e, index) => {
                  let desc = e.description;
                  let isImage = e.image.length != 0 ? true : false;
                  return (
                    <li key={index} id={e.title}>
                      <div className="text-xl font-bold my-4 mt-12">
                        {e.title}
                      </div>
                      <div
                        className="my-6 font-mono text-lg"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                      {isImage && (
                        <ImageLoader
                          mainImageSrc={`https://drive.google.com/uc?export=view&id=${e.image}`}
                          altImageSrc={"/img/loading.jpg"}
                          altText={"image"}
                          classValue={
                            "object-cover object-center w-full h-full"
                          }
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
              <section>
                <div className="font-bold text-lg md:text-2xl mt-16 text-black">
                  Colloquiums and Seminars
                </div>
                <div className="my-5 text-black">To be updated soon.</div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <div className="gradient-bg-footer mt-20">
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let workProgessData = await fs.readFile(
    "data/publication/workinprogress.json",
    "utf-8"
  );
  workProgessData = JSON.parse(workProgessData);
  return {
    props: { workProgessData },
  };
}

export default Publications;
