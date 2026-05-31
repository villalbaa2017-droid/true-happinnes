

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      name: "Nike Dunk Low",
      price: 180000,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Buzos Oversize",
      price: 95000,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      name: "Accesorios Streetwear",
      price: 35000,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },
  ];

  const [cart, setCart] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const sendCartWhatsApp = () => {
    const message =
      "Hola! quiero comprar:%0A" +
      cart.map((p) => `- ${p.name} ($${p.price})`).join("%0A");

    window.open(
      `https://wa.me/5491173600891?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

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

          <div className="flex flex-wrap gap-3 items-center">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-3 py-2 rounded bg-zinc-800 text-white"
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="bg-white text-black px-3 py-1 rounded-full font-bold">
              🛒 {cart.length}
            </div>

            <a
              href="https://www.instagram.com/true.happinnes_/"
              target="_blank"
              className="border border-pink-500 px-4 py-2 rounded-xl hover:bg-pink-900/30 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </nav>

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          STREETWEAR PREMIUM
        </h2>

        <p className="text-zinc-400 max-w-3xl mx-auto mb-8 text-lg">
          Sneakers, ropa urbana y accesorios seleccionados para destacar tu estilo.
        </p>

        <a
          href="https://wa.me/5491173600891"
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition inline-block"
        >
          Consultar por WhatsApp
        </a>
      </section>

      <section className="py-20 px-6 bg-zinc-950">
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

      <section className="px-6 py-16">
        <h3 className="text-4xl font-bold text-center mb-12">Categorías</h3>

        <div className="grid md:grid-cols-3 gap-8">
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
              <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h4 className="text-3xl font-bold">{c.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-14">
          Productos Destacados
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProducts.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{p.name}</h4>

                <p className="text-3xl font-bold mb-5">
                  ${p.price.toLocaleString()}
                </p>

                <button
                  onClick={() => addToCart(p)}
                  className="bg-white text-black px-4 py-2 rounded-xl font-semibold w-full"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            En TRUE HAPPINESS creemos que la ropa y las zapatillas son una forma
            de expresión. Buscamos acercarte las mejores tendencias del streetwear.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 border-t border-zinc-800">
        <h3 className="text-3xl font-bold mb-4">🛒 Carrito</h3>

        {cart.length === 0 ? (
          <p className="text-zinc-500">Carrito vacío</p>
        ) : (
          <>
            {cart.map((p, i) => (
              <div
                key={i}
                className="flex justify-between bg-zinc-900 p-3 rounded mb-2"
              >
                <span>{p.name}</span>

                <button
                  onClick={() => removeFromCart(i)}
                  className="text-red-400"
                >
                  eliminar
                </button>
              </div>
            ))}

            <button
              onClick={sendCartWhatsApp}
              className="mt-4 bg-green-500 text-black px-6 py-3 rounded font-bold"
            >
              Comprar todo por WhatsApp
            </button>
          </>
        )}
      </section>

      <a
        href="https://wa.me/5491173600891"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-400">
        <p>© 2026 TRUE HAPPINESS - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

