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
  const [open, setOpen] = useState(false);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => [...prev, producto]);
    setOpen(true);
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

              <p className="text-zinc-400">Talles: {producto.talle}</p>

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

  const totalPrecio = carrito.reduce((acc, p) => acc + p.precio, 0);

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

        {/* BOTÓN CARRITO */}
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-4 py-2 rounded-xl font-bold mt-2"
        >
          🛒 {carrito.length}
        </button>
      </div>

      {/* CARRITO LATERAL (SHOPIFY STYLE) */}
      {open && (
        <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-black text-white shadow-2xl z-50 p-6 flex flex-col">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Tu carrito</h2>

            <button
              onClick={() => setOpen(false)}
              className="text-red-400 text-xl"
            >
              ✕
            </button>
          </div>

          {/* ITEMS */}
          <div className="flex-1 overflow-auto space-y-4">
            {carrito.length === 0 && (
              <p className="text-zinc-400">El carrito está vacío</p>
            )}

            {carrito.map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-zinc-800 pb-2"
              >
                <div>
                  <p className="font-bold">{item.nombre}</p>
                  <p className="text-green-400">
                    ${item.precio.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => eliminarDelCarrito(i)}
                  className="text-red-400"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="border-t border-zinc-800 pt-4 mt-4">
            <p className="text-lg font-bold mb-3">
              Total: ${totalPrecio.toLocaleString()}
            </p>

            <a
              href={`https://wa.me/5491173600891?text=Hola quiero comprar:%0A${carrito
                .map((p) => `- ${p.nombre} $${p.precio}`)
                .join("%0A")}%0A%0ATotal: $${totalPrecio}`}
              target="_blank"
              className="block bg-green-500 text-black text-center py-3 rounded-xl font-bold"
            >
              Finalizar compra
            </a>
          </div>
        </div>
      )}

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