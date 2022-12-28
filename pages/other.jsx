import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Other = () => {
  return (
    <div>
      <Head>
        <title>Others</title>
        <meta name="description" content="Others" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="flex flex-col px-6 md:w-4/5 my-12 m-auto">
        <div className="font-extrabold text-4xl text-neutral-900">
          Other things i do ...
        </div>
        {/* <div className="info my-16 md:w-1/2 text-2xl md:text-left text-center underline">
           temporary
        </div> */}
        {/* <div className="my-32"></div> */}

        <div className="blog my-12">
          <Blog />
        </div>

        <div className="gallery my-12">
          <Gallery />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <div className="blog">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a class="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Meditation bushwick direct trade taxidermy shaman
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a class="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span class="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Woke master cleanse drinking vinegar salvia
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a class="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Master Cleanse Reliac Heirloom
              </h1>
              <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/500x300"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/501x301"
                  />
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src="https://dummyimage.com/600x360"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src="https://dummyimage.com/601x361"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/502x302"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/503x303"
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
