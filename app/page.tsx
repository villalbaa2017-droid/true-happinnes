"use client";

import { useState } from "react";

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
    <main
      className="min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('/publicskate.jpg')",
      }}
    >
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800 backdrop-blur-md bg-black/30">
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-14 h-14 rounded-full object-cover"
          />

          <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
            TRUE HAPPINNES
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Buscar..."
            className="px-3 py-2 rounded bg-zinc-800 text-white outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* CART COUNT */}
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
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Streetwear & Zapatillas
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
          Ropa urbana, zapatillas importadas y estilo auténtico. Calidad
          premium y envíos rápidos.
        </p>

        <a
          href="https://wa.me/5491173600891"
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition inline-block"
        >
          Consultar por WhatsApp
        </a>
      </section>

      {/* CATEGORIAS */}
      <section className="px-6 py-16">
        <h3 className="text-4xl font-bold text-center mb-12">
          Categorías
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Zapatillas",
              img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            },
            {
              title: "Ropa",
              img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            },
            {
              title: "Accesorios",
              img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden group"
            >
              <img
                src={c.img}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h4 className="text-3xl font-bold">{c.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-14">
          Productos Destacados
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition"
            >
              <img src={p.img} className="w-full h-80 object-cover" />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{p.name}</h4>

                <p className="text-3xl font-bold mb-5">
                  ${p.price.toLocaleString()}
                </p>

                <button
                  onClick={() => addToCart(p)}
                  className="bg-white text-black px-4 py-2 rounded-xl font-semibold w-full mb-2"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CART */}
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

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        <p>© 2026 TRUE HAPPINNES - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}