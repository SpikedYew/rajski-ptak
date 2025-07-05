"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function DeliverySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  text-center md:text-left lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/2.jpg"
              alt="About our florist studio"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-200 rounded-full opacity-50"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16  bg-purple-200 rounded-full opacity-50"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Poczta kwiatowa
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tworzymy wyjątkowe kompozycje kwiatowe, które oddają charakter
              każdej okazji. Każdy bukiet to połączenie pasji, natury i dobrego
              stylu.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {/* {[
                { number: "250+", label: "Zadowolonych klientów" },
                { number: "150+", label: "Unikalnych projektów" },
                { number: "100%", label: "Naturalnych materiałów" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))} */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="font-playfair text-2xl sm:text-3xl font-bold text-green-600 mb-2"></div>
                <div className="text-sm text-slate-600">+48 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"
// import { siteConfig } from "@/lib/siteConfig"

// export function AboutSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="about" className={`py-20 bg-${siteConfig.colors.white}`} ref={ref}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <h2
//               className={`${siteConfig.fonts.heading} text-3xl sm:text-4xl font-bold text-${siteConfig.colors.text} mb-6`}
//             >
//               {siteConfig.about.title}
//             </h2>
//             <p className={`text-lg text-${siteConfig.colors.textLight} mb-8 leading-relaxed`}>
//               {siteConfig.about.content}
//             </p>

//             <div className="grid grid-cols-3 gap-6">
//               {siteConfig.about.stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div
//                     className={`${siteConfig.fonts.heading} text-2xl sm:text-3xl font-bold text-${siteConfig.colors.primary} mb-2`}
//                   >
//                     {stat.number}
//                   </div>
//                   <div className={`text-sm text-${siteConfig.colors.textLight}`}>{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <img
//               src={siteConfig.about.image || "/placeholder.svg"}
//               alt="About our florist studio"
//               className="rounded-lg shadow-lg w-full h-auto"
//             />
//             <div
//               className={`absolute -bottom-6 -left-6 w-24 h-24 bg-${siteConfig.colors.secondary} rounded-full opacity-50`}
//             ></div>
//             <div
//               className={`absolute -top-6 -right-6 w-16 h-16 bg-${siteConfig.colors.accent} rounded-full opacity-50`}
//             ></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
