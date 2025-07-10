"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden  md:min-h-screen flex flex-col md:flex-row-reverse items-center justify-center bg-white"
    >
      <div className="max-h-[60vh] relative md:max-h-screen overflow-hidden md:w-1/2 h-full inset-0 bg-cover bg-center bg-no-repeat">
        <Image
          src="/maria/maria_gancarek.webp"
          width={400}
          height={700}
          alt="Maria Helena Gancarek - Florystka"
          className="relative w-full h-full object-cover"
        />
      </div>

      <div className=" pt-10 md:pt-0 md:w-1/2 h-full relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4"
        >
          Twoja lokalna florystka w Stanowicach.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-xl sm:text-2xl text-black/90 mb-6"
        >
          Eleganckie kompozycje na każdą okazję - <i>Maria Helena Gancarek</i>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-black/80 mb-8 max-w-2xl mx-auto"
        >
          Od bukietów ślubnych po dekoracje eventowe – stworzę dla Ciebie coś
          wyjątkowego.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            <a href="#contact">Skontaktuj się ze mną</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
