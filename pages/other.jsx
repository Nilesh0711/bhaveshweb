import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const Other = () => {
  return (
    <div>
      <Head>
        <title>Others</title>
        <meta name="description" content="Others" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar other={"font-bold text-blue-500"} extra={""} />
      <main>
        <div className="flex flex-col px-6 md:w-4/5 mt-12 m-auto">
          <div className="font-extrabold text-xl text-black md:text-4xl">
            Other things i do ...
          </div>
        </div>
        {/* <div className="blog mt-16">
          <div className="title text-center font-bold text-lg md:text-3xl">Blogs</div>
          <Blog1 />
          <Blog2 />
        </div> */}
        <div className="gallery pt-6 md:pt-5">
          <div className="title text-center font-bold text-lg pt-6 text-black md:text-3xl">
            Gallery
          </div>
        </div>
        <Gallery1 />
        <Gallery2 />
        <Gallery3/>
        <Gallery4/>
        <Gallery5/>
      </main>
      <div className="pt-32 gradient-bg-footer">
        <Footer />
      </div>
    </div>
  );
};

const Blog1 = () => {
  return (
    <>
      <div className="blog">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 md:mt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/721x401"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The 400 Blows
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/722x402"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Blog2 = () => {
  return (
    <>
      <div className="blog">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-14 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-start justify-center">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    12 Jun 2019
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-lg md:text-2xl font-medium text-gray-900 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-start justify-center">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    12 Jun 2019
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-lg md:text-2xl font-medium text-gray-900 title-font mb-2">
                    Meditation bushwick direct trade taxidermy shaman
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-start justify-center">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-lg md:text-2xl font-medium text-gray-900 title-font mb-2">
                    Woke master cleanse drinking vinegar salvia
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Gallery1 = () => {
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
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/dp.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/cat.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/chennai.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/marina.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/resturant.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/drawing.jpg"
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

const Gallery2 = () => {
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
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/dive.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/daru.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/masterproject.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/shivadrawing.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/beach.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/medal.jpg"
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

const Gallery3 = () => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap mt-10">
            <div className="md:flex w-full mb-10 md:mb-20">
              <h1 className="text-lg md:text-3xl font-medium title-font text-black mb-4 flex text-center mx-auto">
                Life at NIT Rourkela
              </h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1g-7a0iNRQxNdpGNGlavssZC5AL_CmuP3"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1BPNxgC1OpbKfP4H1-KbtQkhD99cy5-1m"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://drive.google.com/uc?export=view&id=1mKn2KdmggkOtQXY-fIzhrHGHN1A8A3Pz"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://drive.google.com/uc?export=view&id=17fB2rcWC2xLwnSO6xGRsuZ_et0RL6tT2"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1bPF_qtF7stweFNnZYa-eRIUBBqRnljOE"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1z1bnhtOlQxfY1krmzQL3A8cr5Ahwc7-E"
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

const Gallery4 = () => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap mt-10">
            <div className="md:flex w-full mb-10 md:mb-20">
              <h1 className="text-lg md:text-3xl font-medium title-font text-black mb-4 flex text-center mx-auto">
                Life at NIT Rourkela
              </h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1eY1tV_zKPbJim3sAwS7bqr7G2IYvHbz7"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1pEt_6U4Xmm_JnZngZ7zOOT7jc7b5pbw9"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://drive.google.com/uc?export=view&id=1AiMucmVtCo_Gj4MH1oxAvAw0nOwGFNat"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://drive.google.com/uc?export=view&id=1MEGkUS5HgeTJjSoKZdeU8S_Tj6f0elcC"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1XEte_rAuFOf9M_k8PLBPzXFR4uOlmN-s"
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

const Gallery5 = () => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap mt-10">
            <div className="md:flex w-full mb-10 md:mb-20">
              <h1 className="text-lg md:text-3xl font-medium title-font text-black mb-4 flex text-center mx-auto">
                Life at NIT Rourkela
              </h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1AN2zNy3VzxudlDIHr2CI0gLuEEkjB_HA"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1BsRaiMx3PlPlRXhbC0GLWoCqoo5o2Sot"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://drive.google.com/uc?export=view&id=1KIQ_8G8yLqZh56gUwHq6J9GfI8Eo4dRY"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://drive.google.com/uc?export=view&id=1YftgGaqUC6CxOObV7F1Y8k0B-rZCtGUx
                    "
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://drive.google.com/uc?export=view&id=1Hv1uY-rRsm6V95Vq43PfytCZnZ9TNU5Q"
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

export default Other;
