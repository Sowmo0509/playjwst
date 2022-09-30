import Link from "next/link";
import React from "react";
import PlayButton from "../../components/PlayButton";
import ReactCompareImage from "react-compare-image-r18";

const Compare = () => {
  return (
    <section className="bgimg-game min-h-screen w-full">
      <div className="main container mx-auto md:flex md:justify-center md:items-center py-8 px-8 min-h-screen text-white relative overflow-hidden">
        {/* MAIN STUFFS */}
        <div className="quiz md:w-1/2 mx-auto text-white bg-gray-700 p-6 md:p-8 rounded-lg">
          <h3 className="pb-4 text-3xl font-bold">SMACS 0723</h3>
          <ReactCompareImage leftImageLabel="Hubble" rightImageLabel="Webb" leftImage="/images/cardgame/hubble/1.jpg" rightImage="/images/cardgame/webb/1.jpg" />
          <p className="pt-8 mb-3 text-gray-400">NASA’s James Webb Space Telescope has delivered the deepest and sharpest infrared image of the distant universe so far. Webb’s First Deep Field is galaxy cluster SMACS 0723, and it is teeming with thousands of galaxies – including the faintest objects ever observed in the infrared.</p>
          <p className="mb-3 text-gray-400">Webb’s image is approximately the size of a grain of sand held at arm’s length, a tiny sliver of the vast universe. The combined mass of this galaxy cluster acts as a gravitational lens, magnifying more distant galaxies, including some seen when the universe was less than a billion years old. This deep field, taken by Webb’s Near-Infrared Camera (NIRCam), is a composite made from images at different wavelengths, totaling 12.5 hours – achieving depths at infrared wavelengths beyond the Hubble Space Telescope’s deepest fields, which took weeks. And this is only the beginning. Researchers will continue to use Webb to take longer exposures, revealing more of our vast universe.</p>
          <p className="mb-3 text-gray-400">This image shows the galaxy cluster SMACS 0723 as it appeared 4.6 billion years ago, with many more galaxies in front of and behind the cluster. Much more about this cluster will be revealed as researchers begin digging into Webb’s data. This field was also imaged by Webb’s Mid-Infrared Instrument (MIRI), which observes mid-infrared light.</p>
          <p className="mb-3 text-gray-400">Webb’s NIRCam has brought distant galaxies into sharp focus – they have tiny, faint structures that have never been seen before, including star clusters and diffuse features.</p>
          <h6 class="text-sm font-bold">Image credit: NASA, ESA, CSA, and STScI</h6>
          <Link href={"https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-delivers-deepest-infrared-image-of-universe-yet"}>
            <a target={"_blank"} rel="noopener noreferrer" className="inline-flex pt-6 items-center text-lg text-blue-500 hover:underline">
              Read Full Article
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </Link>
          <PlayButton text={"See Result →"} />
        </div>
      </div>
    </section>
  );
};

export default Compare;
