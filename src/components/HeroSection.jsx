import React from 'react';
import { Navbar } from './Navbar.jsx';
import { SparkleEffect } from './SparkleEffect.jsx';
import { RotatingObject } from './RotatingObject.jsx';

const HeroSection = () => {
  return (
    <div>
      <main className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <video
          src="66546251d795c40282efe3f3%2F66570514ad5a9644e7915b9e_64c2353172e97a702d066dd2_new-transcode 1 (1)-transcode.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        {/* Animated Elements */}
        <RotatingObject />
        <SparkleEffect />
        <Navbar />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="min-h-screen flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Exceptional Brand Transformation
              <br />
              by Strategic Design
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Transforming Brands With Precision, Creativity, and Strategic Insight
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
