"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Skontaktuj się ze mną
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Masz pytania? Napisz do mnie, a odpowiem jak najszybciej!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Kontakt Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-slate-800">
                  Informacje Kontaktowe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-slate-800">Adres</p>
                    <p className="text-slate-600">
                      ul. Powstańców 17B, 44-237 Stanowice
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-slate-800">Telefon</p>
                    <p className="text-slate-600">+48 533 320 515</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">kontakt@twojafirma.pl</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-slate-800">
                      Godziny Otwarcia
                    </p>
                    <p className="text-slate-600">Pon-Pt: 8:00–15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-slate-800"
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-slate-800"
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Formularz */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-slate-800">
                  Wyślij nam Wiadomość
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-800 mb-1"
                      >
                        Imię *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-800 mb-1"
                      >
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-800 mb-1"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-800 mb-1"
                    >
                      Wiadomość *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="W czym możemy pomóc?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Wyślij Wiadomość
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
