"use client";

export function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-playfair text-xl font-bold mb-2">
            Florystyka Studio
          </div>
          <p className="text-white/80 mb-4">
            Tworzymy piękno z natury – na każdą okazję
          </p>
          <p className="text-sm text-white/60">
            <a
              target="_blank"
              href="https://www.bartoszchmielecki.com"
              rel="follow noopener"
            >
              &copy; {new Date().getFullYear()} Strona DEMO, wykonanie - Bartosz
              Chmielecki
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
