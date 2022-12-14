import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (!term.trim()) return;
    router.push(`/search?term=${term}&searchType=`);
  }

  async function randomSearch(even) {
    event.preventDefault();
    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((response) => response.json());
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  }
  return (
    <div>
      <Head>
        <title> Google Clone </title>
        <meta name="description" content="Generated by coding360" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="300"
          height="100"
          objectFit="cover"
        />
        <div className="flex w-full mt-5 max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg  px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={randomSearch}>
            I&apos;m Felling lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
