"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/fondo.jpg')",
      }}
    >
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/70 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-16 h-16 rounded-full object-cover"
            />

            <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
              TRUE HAPPINESS
            </h1>
          </div>

          <a
            href="https://www.instagram.com/true.happiness_1/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-pink-500 px-4 py-2 rounded-xl hover:bg-pink-900/30 transition"
          >
            Instagram
          </a>
        </div>
      </nav>

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
          ¿QUIÉNES SOMOS?
        </h2>

        <p className="text-zinc-300 max-w-4xl mx-auto text-lg leading-relaxed">
          En <span className="font-bold text-white">TRUE HAPPINESS</span> creemos
          que la moda es una forma de expresión. Nuestro objetivo es acercarte
          las últimas tendencias en zapatillas, indumentaria y accesorios,
          combinando calidad, estilo y atención personalizada.
        </p>

        <p className="text-zinc-300 max-w-4xl mx-auto text-lg leading-relaxed mt-6">
          Trabajamos para ofrecer productos cuidadosamente seleccionados,
          buscando que cada cliente encuentre aquello que mejor represente su
          identidad y su forma de vivir la cultura urbana.
        </p>

        <p className="text-zinc-300 max-w-4xl mx-auto text-lg leading-relaxed mt-6">
          Más que una tienda, somos una comunidad apasionada por el streetwear,
          las nuevas tendencias y la autenticidad.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/40 border border-zinc-700 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">
              🎯 Nuestra Misión
            </h3>

            <p className="text-zinc-300">
              Brindar productos de calidad y una experiencia de compra simple,
              segura y confiable para cada cliente.
            </p>
          </div>

          <div className="bg-black/40 border border-zinc-700 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">
              👟 Nuestro Estilo
            </h3>

            <p className="text-zinc-300">
              Inspirados en la cultura urbana, el streetwear y las tendencias
              que marcan el presente.
            </p>
          </div>

          <div className="bg-black/40 border border-zinc-700 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">
              🚚 Nuestro Compromiso
            </h3>

            <p className="text-zinc-300">
              Atención personalizada, envíos a todo el país y seguimiento
              durante todo el proceso de compra.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition inline-block"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}