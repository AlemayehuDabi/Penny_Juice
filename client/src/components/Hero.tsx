import { Link } from "react-router-dom";
import type { HeroProps } from "../pages/Home";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero(props: HeroProps) {
  const {
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    imageSrc,
    imageAlt,
  } = props;

  const imgSlideUp = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    if (imgSlideUp.current) {
      gsap.fromTo(
        imgSlideUp.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 3, ease: "power3.out" }
      );
    }
  }, []);

  // animation text and CTA
  useGSAP(() => {
    const tl = gsap.timeline();

    // title
    tl.fromTo(
      titleRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.Out",
      }
    );

    // description
    tl.fromTo(
      descRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.Out",
      },
      "+=0.05"
    );

    // cta
    tl.fromTo(
      ctaRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.Out",
      },
      "+=0.05"
    );
  });

  return (
    <section
      className="py-12 lg:py-16 mt-16 md:mb-24 to-white"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left imgSlideUp-fade-in">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              ref={titleRef}
            >
              {title}
              <span className="block text-orange-500">{subtitle}</span>
            </h1>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-6"
              ref={descRef}
            >
              {description}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              ref={ctaRef}
            >
              <Link
                to={ctaLink}
                className="inline-block px-6 py-3 bg-amber-500 text-white rounded-md font-medium text-sm sm:text-base hover:bg-amber-600 transition duration-300"
                aria-label={ctaText}
              >
                {ctaText}
              </Link>
              <Link
                to={secondaryCtaLink}
                className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium text-sm sm:text-base hover:bg-amber-100 transition duration-300"
                aria-label={secondaryCtaText}
              >
                {secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative group">
            <div className="relative rounded-lg overflow-hidden transform group-hover:scale-105 transition duration-300">
              <img
                src={imageSrc}
                alt={imageAlt}
                ref={imgSlideUp}
                className="w-full h-auto max-h-80 sm:max-h-96 object-contain"
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
