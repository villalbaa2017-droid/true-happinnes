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
            className="border border-pink-500 px-4 py-2 rounded-xl hover:bg-pink-900/30 transition"
          >
            Instagram
          </a>
        </div>
      </nav>

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          STREETWEAR PREMIUM
        </h2>

        <p className="text-zinc-300 max-w-3xl mx-auto mb-8 text-lg">
          Sneakers, ropa urbana y accesorios seleccionados para destacar tu estilo.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/zapatillas"
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold"
          >
            Ver Catálogo
          </Link>

          <a
            href="https://wa.me/5491173600891"
            target="_blank"
            className="bg-green-500 text-black px-8 py-4 rounded-2xl font-bold"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
<section className="px-6 py-16"> <h3 className="text-4xl font-bold text-center mb-12">Categorías</h3> <div className="grid md:grid-cols-3 gap-8"> {[ { title: "Zapatillas", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", link: "/zapatillas", }, { title: "Ropa", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", link: "/ropa", }, { title: "Accesorios", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", link: "/accesorios", }, ].map((c, i) => ( <Link key={i} href={c.link}> <div className="relative rounded-3xl overflow-hidden group cursor-pointer"> <img src={c.img} alt={c.title} className="w-full h-80 object-cover group-hover:scale-110 transition duration-500" /> <div className="absolute inset-0 bg-black/40 flex items-center justify-center"> <h4 className="text-3xl font-bold">{c.title}</h4> </div> </div> </Link> ))} </div> </section>
      <section className="py-20 px-6 bg-zinc-950/80">
        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            🚚 Envíos a todo el país
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            🔒 Compra segura
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            ⭐ Calidad premium
          </div>
        </div>
      </section>

      {/* DEJÁ TU SECCIÓN DE CATEGORÍAS EXACTAMENTE COMO ESTÁ */}

      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Cómo realizo mi pedido?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="font-bold mb-2">1. Elegí tu producto</h3>
            <p className="text-zinc-300">
              Mirá nuestro catálogo y seleccioná el modelo que más te guste.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold mb-2">2. Contactanos</h3>
            <p className="text-zinc-300">
              Enviános una captura por WhatsApp o Instagram.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="font-bold mb-2">3. Confirmá tu pago</h3>
            <p className="text-zinc-300">
              Te pasamos los datos y confirmamos tu pedido.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold mb-2">4. Recibí tu compra</h3>
            <p className="text-zinc-300">
              Preparamos el envío y te compartimos el seguimiento.
            </p>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5491173600891"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>
    </main>
  );
}