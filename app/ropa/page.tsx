"use client";

import Link from "next/link";

export default function ropa() {
  const marcas = {
    MODELOS: [
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
    ],
  };

  <main
  className="min-h-screen text-white bg-cover bg-center bg-fixed relative"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.92)), url('/fondo.jpg')",
  }}
></main>
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="flex flex-col items-center gap-4 mb-10">
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-24 h-24 rounded-full"
        />

        <h1 className="text-4xl font-bold">
          TRUE HAPPINNES
        </h1>

        <a
          href="https://www.instagram.com/true.happinnes_/"
          target="_blank"
          className="border border-pink-500 px-4 py-2 rounded-xl"
        >
          Instagram
        </a>
      </div>

      <h2 className="text-5xl font-bold text-center mb-10">
        <picture>
            <source media="(min-width: )" srcset="" />
            <img src="" alt="" />
        </picture>opa
      </h2>

      <Link
        href="/"
        className="inline-block mb-10 bg-white text-black px-4 py-2 rounded-xl"
      >
        ← Inicio
      </Link>

      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6">ADIDAS</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.adidas.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Adidas"
              className="rounded-2xl h-72 w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6">NIKE</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.nike.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Nike"
              className="rounded-2xl h-72 w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6">DC</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.dc.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="DC"
              className="rounded-2xl h-72 w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6">VANS</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.vans.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Vans"
              className="rounded-2xl h-72 w-full object-cover"
            />
          ))}
        </div>
      </section>

    </main>
  );
}