import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as fs from "node:fs/promises";
import ImageLoader from "../components/imageLoader";

const Other = (props) => {
  const gallery1Data = props.gallery1Data;
  const gallery2Data = props.gallery2Data;
  const gallery3Data = props.gallery3Data;
  const gallery4Data = props.gallery4Data;

  return (
    <div>
      <Head>
        <title>Others - Bhavesh Gupta | Prime Minister Research Fellow | Department of Physics | IIT Madras</title>
        <meta name="description" content="CQuICC | Center for Quantum Information, Communication and Computing | Department of Physics | IIT Madras | Prime Minister Research Fellow" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar other={"font-bold text-blue-500"} extra={""} />
      <main>
        <div className="flex flex-col px-6 md:w-4/5 mt-12 m-auto">
          <div className="font-extrabold text-xl text-black md:text-4xl">
            Other things i do ...
          </div>
        </div>
        <div className="gallery pt-6 md:pt-5">
          <div className="title text-center font-bold text-lg pt-6 text-black md:text-3xl">
            Gallery
          </div>
        </div>
        <Gallery1 gallery1Data={gallery1Data} />
        <Gallery2 gallery2Data={gallery2Data} />
        <Gallery3 gallery3Data={gallery3Data} />
        <Gallery4 gallery4Data={gallery4Data} />
      </main>
      <div className="pt-32 gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const Gallery1 = ({ gallery1Data }) => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 md:py-15 mx-auto md:flex flex-wrap">
            <div className="md:flex w-full mb-10 md:mb-20 flex-wrap">
              <h1 className="text-lg md:text-3xl font-medium title-font text-black mb-4 flex items-center">
                Life at IIT Madras
              </h1>
              <p className="md:w-2/3 md:ml-24 mt-5 leading-relaxed text-lg text-gray-600 text-justify">
                There is alot that you can explore in this huge campus. It is
                always fun to go on a cycle ride around the campus(until you
                explore most of the campus…because I now feel that this campus
                is small). Probably night life in insti will be alot more
                memorable(of course as of now we have curfew for freshies and we
                are expected to be back in the hostel by 9:30…but it's okay to
                break the rules sometimes). Going to the beach to see the
                sunrise is something you will cherish. Saturday OAT movie with
                your friends and Wolf night and Freshie night would be great
                experiences. Most importantly you would learn how to tackle
                monkeys.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery1Data[0].img1}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery1Data[0].img2}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery1Data[0].img3}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery1Data[0].img4}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery1Data[0].img5}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery1Data[0].img6}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Gallery2 = ({ gallery2Data }) => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap">
            <div className="md:flex w-full mb-10 md:mb-20 flex-wrap">
              <h1 className="text-lg md:text-3xl font-medium title-font text-black mb-4 flex items-center">
                Life at NIT Rourkela
              </h1>
              <p className="md:w-2/3 md:ml-24 mt-5 leading-relaxed text-gray-600 text-lg text-justify">
                Life can’t be better ever anywhere other than NIT Rourkela a
                cool place(of course not climate-wise). A huge campus filled
                with greenery that you will feel like you are just out of the
                polluted world. Weekend holidays, when you can go out with
                friends and have a lot of fun. So many clubs are there, that you
                can improve your personality as much you want. So many
                extracurricular activities you can avail such as swimming, gym,
                basket ball, table tennis,volley ball, cricket etc.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery2Data[0].img1}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery2Data[0].img2}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery2Data[0].img3}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery2Data[0].img4}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery2Data[0].img5}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery2Data[0].img6}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Gallery3 = ({ gallery3Data }) => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap mt-10">
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery3Data[0].img1}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery3Data[0].img2}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery3Data[0].img3}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery3Data[0].img4}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery3Data[0].img5}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery3Data[0].img6}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Gallery4 = ({ gallery4Data }) => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap mt-10">
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery4Data[0].img1}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery4Data[0].img2}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery4Data[0].img3}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery4Data[0].img4}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery4Data[0].img5}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <ImageLoader
                    mainImageSrc={`https://drive.google.com/uc?export=view&id=${gallery4Data[0].img6}`}
                    altImageSrc={"/img/loading.jpg"}
                    altText={"image"}
                    classValue={
                      "w-full object-cover h-full object-center block"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  let gallery1Data = await fs.readFile("data/gallery/gallery1.json", "utf-8");
  let gallery2Data = await fs.readFile("data/gallery/gallery2.json", "utf-8");
  let gallery3Data = await fs.readFile("data/gallery/gallery3.json", "utf-8");
  let gallery4Data = await fs.readFile("data/gallery/gallery4.json", "utf-8");

  gallery1Data = JSON.parse(gallery1Data);
  gallery2Data = JSON.parse(gallery2Data);
  gallery3Data = JSON.parse(gallery3Data);
  gallery4Data = JSON.parse(gallery4Data);

  return {
    props: { gallery1Data, gallery2Data, gallery3Data, gallery4Data },
  };
}

export default Other;
