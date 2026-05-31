"use client";

import Link from "next/link";

export default function Ropa() {
  const modelos = [
    "ADIDAS.jpeg",
    "ADIDAS1.jpeg",
    "ADIDAS2.jpeg",
    "ADIDAS3.jpeg",
    "ADIDAS4.jpeg",
    "ADIDAS5.jpeg",
    "ADIDAS6.jpeg",
    "ADIDAS7.jpeg",
    "ADIDAS8.jpeg",
    "ADIDAS9.jpeg",
    "ADIDAS10.jpeg",
    "ADIDAS11.jpeg",
    "ADIDAS12.jpeg",
    "ADIDAS13.jpeg",
  ];

  return (
    <main
      className="min-h-screen text-white p-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.92)), url('/fondo.jpg')",
      }}
    >
      <div className="flex flex-col items-center gap-4 mb-10">
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-24 h-24 rounded-full"
        />

        <h1 className="text-4xl font-bold">
          TRUE HAPPINESS
        </h1>

        <a
          href="https://www.instagram.com/true.happinnes_/"
          target="_blank"
          className="border border-pink-500 px-4 py-2 rounded-xl"
        >
          Instagram
        </a>
      </div>

      <h2 className="text-5xl font-bold text-center mb-4">
        Ropa
      </h2>

      <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-10">
        Encontrá prendas urbanas inspiradas en las últimas tendencias del streetwear.
      </p>

      <Link
        href="/"
        className="inline-block mb-10 bg-white text-black px-4 py-2 rounded-xl"
      >
        ← Inicio
      </Link>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <div className="bg-black/40 border border-zinc-700 p-4 rounded-xl text-center">
          🚚 Envíos a todo el país
        </div>

        <div className="bg-black/40 border border-zinc-700 p-4 rounded-xl text-center">
          💳 Transferencia con descuento
        </div>

        <div className="bg-black/40 border border-zinc-700 p-4 rounded-xl text-center">
          📱 Atención personalizada
        </div>
      </div>

      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6">MODELOS</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {modelos.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Ropa"
              className="rounded-2xl h-72 w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section className="py-16">
        <h3 className="text-3xl font-bold text-center mb-10">
          ¿Por qué elegirnos?
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/50 p-6 rounded-2xl">
            🔥 Diseños urbanos
          </div>

          <div className="bg-black/50 p-6 rounded-2xl">
            ⭐ Calidad seleccionada
          </div>

          <div className="bg-black/50 p-6 rounded-2xl">
            👕 Comodidad para todos los días
          </div>
        </div>
      </section>
    </main>
  );
}