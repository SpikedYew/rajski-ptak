"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const images = [
  {
    src: "/maria/bukiet_3.jpg",
    alt: "Bukiet ślubny z róż",
    category: "",
  },
  {
    src: "/maria/bukiet_roz.jpg",
    alt: "Dekoracja sali weselnej",
    category: "",
  },
  {
    src: "/maria/bukiet-rajski-ptak.jpg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/bukiet.jpg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/1.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/2.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/3.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/4.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/5.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/6.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/7.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },

  {
    src: "/maria/9.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/10.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/11.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/12.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  {
    src: "/maria/13.jpeg",
    alt: "Kompozycja kwiatowa na stół",
    category: "",
  },
  // dodaj więcej zdjęć wg potrzeb
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Moje Realizacje
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Zobacz przykładowe realizacje – bukiety, dekoracje i florystyka
            eventowa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </Button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Zdjęcie w galerii"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
