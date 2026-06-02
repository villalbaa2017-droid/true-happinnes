"use client";

import { useState } from "react";

type Producto = {
  img: string;
  nombre: string;
  precio: number;
  talle: string;
  mp: string;
};

export default function Zapatillas() {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarDelCarrito = (index: number) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  const adidas: Producto[] = [
    {
      img: "ADIDAS.jpeg",
      nombre: "Adidas Campus",
      precio: 180000,
      talle: "39-44",
      mp: "https://mpago.la/TU_LINK",
    },
    {
      img: "ADIDAS1.jpeg",
      nombre: "Adidas Forum",
      precio: 195000,
      talle: "39-44",
      mp: "https://mpago.la/TU_LINK",
    },
  ];

  const NIKE: Producto[] = [
    {
      img: "NIKE1.jpeg",
      nombre: "Nike Air Max",
      precio: 250000,
      talle: "39-44",
      mp: "https://mpago.la/TU_LINK",
    },
    {
      img: "NIKE2.jpeg",
      nombre: "Nike React",
      precio: 220000,
      talle: "39-44",
      mp: "https://mpago.la/TU_LINK",
    },
  ];

  const DC: Producto[] = [
    {
      img: "DC.jpeg",
      nombre: "DC Shoes",
      precio: 200000,
      talle: "39-44",
      mp: "https://mpago.la/TU_LINK",
    },
    {
      img: "DCC.jpeg",
      nombre: "DC Shoes",
      precio: 200000,
      talle: "39-44",
      mp: "https://mpago.la/TU_LINK",
    },
  ];

  const VANS: Producto[] = [
    {
      img: "VANS1.jpeg",
      nombre: "VANS Shoes",
      precio: 180000,
      talle: "39-44",
      mp: "https://mpago.la/TU_LINK",
    },
    {
      img: "VANS2.jpeg",
      nombre: "VANS Skater",
      precio: 160000,
      talle: "39-44",
      mp: "https://link.mercadopago.com.ar/sebastianvillalba",
    },
  ];

  const renderSection = (title: string, data: Producto[]) => (
    <section className="mb-16">
      <h3 className="text-3xl font-bold mb-6">{title}</h3>

      <div className="grid md:grid-cols-4 gap-4">
        {data.map((producto, i) => (
          <div
            key={i}
            className="bg-black/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white transition"
          >
            <img
              src={producto.img}
              alt={producto.nombre}
              className="h-72 w-full object-cover"
            />

            <div className="p-4">
              <h4 className="font-bold text-lg">{producto.nombre}</h4>

              <p className="text-zinc-400">
                Talles: {producto.talle}
              </p>

              <p className="text-green-400 text-2xl font-bold mt-2">
                ${producto.precio.toLocaleString()}
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="flex-1 bg-white text-black py-2 rounded-lg font-bold"
                >
                  Agregar
                </button>

                <a
                  href={producto.mp}
                  target="_blank"
                  className="flex-1 bg-sky-500 text-black py-2 rounded-lg font-bold text-center"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main
      className="min-h-screen text-white p-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/fondo.jpg')",
      }}
    >
      {/* HEADER */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <img src="/logo.jpg" alt="logo" className="w-24 h-24 rounded-full" />

        <h1 className="text-4xl font-bold">TRUE HAPPINNES</h1>

        <a
          href="https://www.instagram.com/true.happinnes_/"
          target="_blank"
          className="border border-pink-500 px-4 py-2 rounded-xl"
        >
          Instagram
        </a>

        {/* CARRITO INDICADOR */}
        <div className="bg-white text-black px-4 py-2 rounded-xl font-bold mt-2">
          🛒 {carrito.length}
        </div>
      </div>

      {/* CARRITO */}
      {carrito.length > 0 && (
        <div className="mb-10 p-4 bg-zinc-900 rounded-xl border border-white/10">
          <h2 className="text-xl font-bold mb-4">Carrito</h2>

          {carrito.map((item, i) => (
            <div key={i} className="flex justify-between mb-2">
              <span>
                {item.nombre} - ${item.precio.toLocaleString()}
              </span>

              <button
                onClick={() => eliminarDelCarrito(i)}
                className="text-red-400"
              >
                X
              </button>
            </div>
          ))}

          <hr className="my-3 border-white/10" />

          <p className="font-bold text-green-400">
            Total: ${total.toLocaleString()}
          </p>
        </div>
      )}

      {/* TÍTULO */}
      <h2 className="text-5xl font-bold text-center mb-4">
        Zapatillas
      </h2>

      <p className="text-center text-zinc-300 max-w-2xl mx-auto mb-10">
        Modelos disponibles por encargo. Consultanos stock, talles y precios por WhatsApp.
      </p>

      {/* BENEFICIOS */}
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

      {/* SECCIONES */}
      {renderSection("ADIDAS", adidas)}
      {renderSection("NIKE", NIKE)}
      {renderSection("DC", DC)}
      {renderSection("VANS", VANS)}

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5491173600891"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>
    </main>
  );
}