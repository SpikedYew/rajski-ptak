"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BuyPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000); // Pojawia się po 5 sek
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed mx-auto w-full bottom-0 md:bottom-6 md:right-6 z-50 bg-white shadow-xl border border-gray-200 p-5 rounded-xl max-w-sm md:w-full animate-fade-in">
      <h2 className="text-lg font-bold text-blue-800">
        Gotowa strona dla florystki
      </h2>
      <p className="text-sm text-gray-700 mt-2">
        Kup tę stronę wraz z instalacją, CMS-em i rocznym hostingiem. Cena od{" "}
        <strong>400 zł</strong>!
      </p>
      <div className="mt-4 space-y-2">
        <a
          href="tel:+48533320515"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Kup teraz + 48 533 320 515
        </a>
        <Link
          href="https://www.bartoszchmielecki.com"
          className="block w-full text-center text-blue-600 text-sm hover:underline"
        >
          Zobacz moją ofertę
        </Link>
      </div>
    </div>
  );
}
