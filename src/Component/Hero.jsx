import React from "react";
import { Button } from "../ui/Button"; // Adjust path according to your folder structure
import heroImage from "../assets/hero-farming.jpg"; // Adjust path according to your assets folder
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[900px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(45, 20, 98, 0.85), rgba(120, 55, 145, 0.75)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in"
          >
            Grow Smarter, Earn More with Bhuumi
          </h2>

          <p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Join 150M smallholder farmers to boost yields 25%, cut losses 20%, and sell direct—all in Tamil, Hindi, and 10+ languages.
          </p>

          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToWaitlist}
              className="text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Join Our Waitlist <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
