"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      name: "Bukiet ślubny",
      description: "Personalizowany bukiet na Twój wyjątkowy dzień.",
      price: "od 200 zł",
      features: [
        "Dopasowanie do stylu Panny Młodej",
        "Transport na miejsce",
        "Możliwość zamówienia dekoracji auta",
      ],
    },
    {
      name: "Dekoracje sali i kościoła",
      description: "Kompleksowa oprawa florystyczna uroczystości.",
      price: "od 500 zł",
      features: [
        "Styl glamour, boho lub klasyczny",
        "Montaż i demontaż dekoracji",
        "Indywidualna konsultacja",
      ],
    },
    {
      name: "Wianki komunijne",
      description: "Delikatne kompozycje z żywych kwiatów.",
      price: "od 100 zł",
      features: [
        "Naturalne kwiaty sezonowe",
        "Pasujący do fryzury i sukienki",
        "Dostawa na wskazany adres",
      ],
    },
    {
      name: "Bukiety okolicznościowe",
      description:
        "Kwiaty na prezent, urodziny, rocznice, Dzień Matki, Dzień Kobiet, walentynki, wiązanki pogrzebowe",
      price: "od 100 zł",
      features: ["Róże, lilie, eustomy i inne", "Dostawa w następny dzień"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Nasza oferta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wybierz pakiet dopasowany do Twoich potrzeb.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-gray-800">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-green-600">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Check
                          size={16}
                          className="text-emerald-400 mr-2 flex-shrink-0"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Dowiedz się więcej
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
