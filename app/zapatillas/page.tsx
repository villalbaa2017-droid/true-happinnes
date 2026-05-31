"use client";

import Link from "next/link";

export default function Zapatillas() {
  const marcas = {
    adidas: [
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
    nike: [
      "NIKE1.JPEG",
      "NIKE2.JPEG",
      "NIKE3.JPEG",
      "NIKE4.JPEG",
      "NIKE5.JPEG",
      "NIKE6.JPEG",
    ],
    dc: [
      "DC.JPEG",
      "DCC.JPEG",
      "DCCC.JPEG",
      "DCCCC.JPEG",
      "DCCCCC.JPEG",
      "DCCCCCC.JPEG",
      "DCCCCCCC.JPEG",
      "DCCCCCCCC.JPEG",
    ],
    vans: [
      "VANS1.JPEG",
      "VANS2.JPEG",
      "VANS3.JPEG",
      "VANS4.JPEG",
      "VANS5.JPEG",
      "VANS6.JPEG",
      "VANS7.JPEG",
      "VANS8.JPEG",
      "VANS9.JPEG",
      "VANS10.JPEG",
      "VANS11.JPEG",
      "VANS12.JPEG",
      "VANS13.JPEG",
      "VANS14.JPEG",
      "VANS15.JPEG",
      "VANS16.JPEG",
      "VANS17.JPEG",
      "VANS18.JPEG",
      "VANS19.JPEG",
      "VANS20.JPEG",
      "VANS21.JPEG",
      "VANS22.JPEG",
      "VANS23.JPEG",
      "VANS24.JPEG",
      "VANS25.JPEG",
      "VANS26.JPEG",
      "VANS27.JPEG",





      
    ],
  };

        <main
  className="min-h-screen text-white bg-cover bg-center bg-fixed"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0), rgba(35, 115, 136, 0)), url('/Skate.jpeg')",
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
        Zapatillas
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