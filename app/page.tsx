"use client";

import Link from "next/link";
import { useState } from "react";
import { text } from "stream/consumers";

export default function Home() {
  // 🔥 SLIDER PRODUCTOS DESTACADOS
  const featured = [
    {
      name: "Pantalon adidas Premium",
      price: 100000,
      img: "ropa7.jpeg",
    },
    {
      name: "Adidas Campus",
      price: 175000,
      img: "ADIDAS.jpeg",
    },
    {
      name: "Jordan 1 Retro",
      price: 220000,
      img: "DC.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % featured.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? featured.length - 1 : prev - 1
    );
  };

  return (
    <main
      className="min-h-screen text-white bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('/fondo.jpg')",
      }}
    >
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-14 h-14 rounded-full object-cover border border-white/20"
            />

            <h1 className="text-xl md:text-2xl font-bold tracking-[0.35em]">
              TRUE HAPPINESS
            </h1>
          </div>

          <a
            href="https://www.instagram.com/true.happiness_1/"
            target="_blank"
            className="px-5 py-2 rounded-full border border-pink-500 text-sm hover:bg-pink-500/20 transition"
          >
            Instagram
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <p className="text-sm tracking-[0.4em] text-white/60 mb-4">
          NUEVA COLECCIÓN 2026
        </p>

        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          STREETWEAR <br />
          <span className="text-pink-400">PREMIUM</span>
        </h2>

        <p className="text-zinc-300 max-w-3xl mx-auto mb-10 text-lg">
          Sneakers, ropa urbana y accesorios seleccionados para destacar tu estilo.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/quienes-somos"
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            ¿Quiénes somos?
          </Link>

          <a
            href="https://wa.me/5491173600891"
            target="_blank"
            className="bg-green-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">
          Categorías
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Zapatillas",
              img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
              link: "/zapatillas",
            },
            {
              title: "Ropa",
              img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
              link: "/ropa",
            },
            {
              title: "Accesorios",
              img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
              link: "/accesorios",
            },
          ].map((c, i) => (
            <Link key={i} href={c.link}>
              <div className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h4 className="text-3xl font-bold">{c.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔥 PRODUCTOS DESTACADOS - SLIDER PRO */}
      <section className="px-6 py-20 bg-zinc-950/70">
        <h2 className="text-4xl font-bold text-center mb-12">
          Productos destacados
        </h2>

        <div className="max-w-4xl mx-auto relative">

          <div className="bg-black/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">

            <img
              src={featured[index].img}
              className="w-full h-[420px] object-cover transition duration-500"
            />

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">
                {featured[index].name}
              </h3>

              <p className="text-white/60 mb-4">
                ${featured[index].price.toLocaleString()}
              </p>
              <a
                href="https://wa.me/5491173600891"
                target="_blank"
                className="bg-green-500 text-black px-6 py-2 rounded-xl font-bold w-full hover:scale-105 transition"
              >
                enviar consulta
              </a>
            </div>
          </div>

          {/* FLECHAS */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            →
          </button>

          {/* INDICADORES */}
          <div className="flex justify-center gap-2 mt-4">
            {featured.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-black/40 p-8 rounded-2xl border border-white/10 text-center">
            🚚 Envíos a todo el país
          </div>

          <div className="bg-black/40 p-8 rounded-2xl border border-white/10 text-center">
            🔒 Compra segura
          </div>

          <div className="bg-black/40 p-8 rounded-2xl border border-white/10 text-center">
            ⭐ Calidad premium
          </div>
        </div>
      </section>

      {/* CÓMO COMPRAR */}
      <section className="py-20 px-6 bg-black/40">
        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Cómo realizo mi pedido?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl border border-white/10 bg-black/30">
            📸 Elegí tu producto
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-black/30">
            💬 Contactanos
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-black/30">
            💳 Pagá tu pedido
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-black/30">
            🚚 Recibí tu compra
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5491173600891"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>

      {/* FOOTER */}
      <footer className="text-center py-10 text-white/50 text-sm">
        © {new Date().getFullYear()} True Happiness - Todos los derechos reservados
      </footer>
    </main>
  );
}