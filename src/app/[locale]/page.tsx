"use client";

import {
  CardList,
  ContactUsForm,
  GrowthSection,
  HighQualitySection,
  LearningProcess,
  SafetySection,
} from "../../components/organizms";
import { AnimatedButton, CustomButton } from "../../components/atoms";
import "./../../styles/globals.css";

export default function Home() {
  return (
    <div className="font-quicksand w-screen">
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[560px] my-24 bg-no-repeat bg-center bg-contain bg-[url('/ELEMENTS-xs.png')] md:bg-[url('/ELEMENTS.png')]">
          <div className="mx-auto px-4 mt-20 md:mt-24 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-gray-900">
              The best place to <br />
              <span className="text-blue-500 italic">learn</span> and{" "}
              <span className="text-orange-500 italic">play</span> <br />
              for your child
            </h1>
            <div className="my-6" />
            <AnimatedButton
              hoverText="Book a tour"
              initialText="Learn more"
              className="bg-red-600 h-[55px] w-[189px] animate-bounce-short"
            />
          </div>
        </section>

        {/* Interactive Program Section */}
        <section className="relative my-6 md:mb-32 md:px-32">
          <div className="px-4 flex flex-col text-black">
            <div className="flex flex-col md:flex-1 w-full items-center">
              <h1 className="text-2xl md:text-3xl font-normal leading-tight text-gray-900 mb-6 md:mb-0">
                Interactive
                <span className="text-orange-500 italic"> program</span> <br />
                tailored for babies and toddlers
              </h1>
              <CustomButton
                variant="outlined"
                onClick={() => console.log("Outlined Clicked!")}
                className="h-11"
              >
                Register Now for 2025
              </CustomButton>
            </div>
            <div className="my-0 md:my-6" />
            <CardList />
          </div>
        </section>

        <section className="relative md:mt-24 md:mb-32">
          <HighQualitySection />
        </section>

        <section className="mb-4 md:mb-32 w-full">
          <GrowthSection />
        </section>

        <section className="mb-4 md:mb-32 w-full">
          <LearningProcess />
        </section>

        <section className="mb-4 md:mb-32 w-full">
          <SafetySection />
        </section>

        <section className="mb-4 md:mb-32 w-full">
          <ContactUsForm />
        </section>
      </div>
    </div>
  );
}
