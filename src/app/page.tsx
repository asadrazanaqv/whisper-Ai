"use client"

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import AudioTranslate from "../components/AudioTranslate";
import Header from "../components/Header";
import TextTranslate from "../components/TextTranslate";

const Home: NextPage = () => {
  const [mode, setMode] = useState<Boolean>(true);

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
   

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mb-[100px] sm:mt-20">
        <h1 className="sm:text-7xl text-4xl max-w-2xl font-bold text-slate-900">
          Lets Translate
        </h1>
        <p className="sm:text-xl text-lg max-w-md font-bold text-slate-900 mt-5">
          Using OpenAI's Whisper + GPT-3.5 API
        </p>
        <div className="flex mt-5 mb-[-5px]">
        <button
  className={`px-4 py-2 font-semibold rounded-md ${
    mode ? "bg-black text-white" : "bg-gray-300 text-black"
  }`}
  onClick={() => setMode(!mode)}
>
  Translate Text
</button>
          <button
            className={`px-4 py-2 font-semibold rounded-md ${
              !mode ? "bg-black text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setMode(!mode)}
          >
            Translate Audio
          </button>
        </div>
        {mode ? <TextTranslate /> : <AudioTranslate />}

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
      </main>
      <footer className="w-full ">
        <p className="border-t-2 flex justify-center font-semibold py-2">
        Learn a language with LetsTranslate.
        </p>
      </footer>
    </div>
  );
};

export default Home;