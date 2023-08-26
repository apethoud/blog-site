import profilePic from '../assets/profile-pic.jpg';
import Image from "next/image";

import { lalezar, lato } from './fonts';
import FeaturedPost from './FeaturedPost';
import { Suspense } from 'react';
import { H2 } from './_UI-components/Headers';
import Text from './_UI-components/Text';

export const revalidate = 0;

const loadingVisual = (
  <div className="flex justify-center">
    <div className="md:w-3/4 bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl">
      <H2>From the Blog</H2>
      <Text>Loading...</Text>
    </div>
  </div>
)

export default async function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-12 mb-24">
        <div className="md:my-12 md:pr-24 w-full">
          <div className={`text-7xl text-black dark:text-violet-50 dark:font-bold mb-6 ${lalezar.className} custom-shadow-effect`}>
            Hey, I'm Andrew Pethoud!
          </div>
          <div className={`text-4xl text-violet-500 dark:text-violet-400 ${lato.className}`}>
            I'm a full-stack software developer passionate about making digital and physical spaces healthy and enjoyable for everyone.
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center mt-12 md:mt-0">
          <Image
            src={profilePic}
            className="rounded-full"
            style={{ objectFit: "contain" }}
            priority={true}
            alt="Andrew Pethoud smiling while posing for a profile photo" />
        </div>
      </div>
      <Suspense fallback={loadingVisual}>
        <FeaturedPost />
      </Suspense>
    </>
  )
}
